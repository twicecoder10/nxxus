// /api/send-email.js
// Modern email API implementation using Resend (recommended for Vercel)
// No more SMTP AUTH issues - uses secure API tokens

module.exports = async (req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

  try {
    const { to, subject, html, text } = req.body || {};
    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: to, subject, html",
      });
    }

    // Check which email service to use (default: Resend)
    const emailService = process.env.EMAIL_SERVICE || 'resend';
    
    if (emailService === 'resend') {
      return await sendWithResend(req, res, { to, subject, html, text });
    } else if (emailService === 'sendgrid') {
      return await sendWithSendGrid(req, res, { to, subject, html, text });
    } else {
      return res.status(500).json({
        success: false,
        message: `Unsupported email service: ${emailService}. Use 'resend' or 'sendgrid'`,
      });
    }
  } catch (error) {
    console.error("❌ Send error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error?.message,
    });
  }
};

// Resend implementation (Recommended - Vercel-friendly)
async function sendWithResend(req, res, { to, subject, html, text }) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  
  if (!RESEND_API_KEY) {
    return res.status(500).json({
      success: false,
      message: "RESEND_API_KEY environment variable is required",
    });
  }

  // Get from email - prioritize RESEND_FROM_EMAIL, fallback to SMTP_FROM_EMAIL
  const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || 'info@nxxus.ai';
  const fromName = process.env.SMTP_FROM_NAME || "NXXUS";

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: [to],
        subject,
        html,
        text: text || html.replace(/<[^>]*>/g, ""),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Resend API error:", data);
      return res.status(response.status).json({
        success: false,
        message: "Failed to send email via Resend",
        error: data.message || data.error || 'Unknown error',
      });
    }

    console.log("✅ Email sent via Resend:", data.id);
    return res.status(200).json({ 
      success: true, 
      messageId: data.id,
      service: 'resend'
    });
  } catch (error) {
    console.error("❌ Resend request error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email via Resend",
      error: error?.message,
    });
  }
}

// SendGrid implementation (Alternative)
async function sendWithSendGrid(req, res, { to, subject, html, text }) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  
  if (!SENDGRID_API_KEY) {
    return res.status(500).json({
      success: false,
      message: "SENDGRID_API_KEY environment variable is required",
    });
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: to }],
        }],
        from: {
          email: process.env.SMTP_FROM_EMAIL || process.env.SENDGRID_FROM_EMAIL,
          name: process.env.SMTP_FROM_NAME || "NXXUS",
        },
        subject,
        content: [
          {
            type: 'text/plain',
            value: text || html.replace(/<[^>]*>/g, ""),
          },
          {
            type: 'text/html',
            value: html,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ SendGrid API error:", errorText);
      return res.status(response.status).json({
        success: false,
        message: "Failed to send email via SendGrid",
        error: errorText,
      });
    }

    console.log("✅ Email sent via SendGrid");
    return res.status(200).json({ 
      success: true, 
      messageId: response.headers.get('x-message-id'),
      service: 'sendgrid'
    });
  } catch (error) {
    console.error("❌ SendGrid request error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email via SendGrid",
      error: error?.message,
    });
  }
}
