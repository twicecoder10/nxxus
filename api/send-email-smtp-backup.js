// /api/send-email.js
const nodemailer = require("nodemailer");

function createTransporter() {
  const port = Number(process.env.SMTP_PORT || 587);
  // Office365/Outlook uses port 587 with STARTTLS (secure: false)
  // Port 465 uses SSL (secure: true)
  const secure = port === 465;
  
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.trim();
  
  // Ensure credentials are present
  if (!user || !pass) {
    throw new Error(`Missing SMTP credentials: user=${!!user}, pass=${!!pass}`);
  }

  const transporterConfig = {
    host: process.env.SMTP_HOST?.trim(),
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Try different authentication methods
    authMethod: 'LOGIN',
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 15000,
  };

  // For Office365/Outlook on port 587, we need STARTTLS
  if (port === 587) {
    transporterConfig.requireTLS = true;
    transporterConfig.tls = {
      rejectUnauthorized: false,
      minVersion: 'TLSv1.2',
    };
    // Office365 specific settings
    transporterConfig.ignoreTLS = false;
    transporterConfig.requireTLS = true;
  } else {
    // For other ports (like 465), use standard TLS
    transporterConfig.tls = { rejectUnauthorized: false };
  }

  return nodemailer.createTransport(transporterConfig);
}

module.exports = async (req, res) => {
  // CORS (fine to keep)
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

    // Validate env - check for both existence and non-empty values
    const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "SMTP_FROM_EMAIL"];
    const missing = requiredEnvVars.filter(
      (k) => !process.env[k] || process.env[k].trim() === ""
    );
    
    if (missing.length) {
      console.error("❌ Missing or empty environment variables:", missing);
      // Log which vars are set (without values for security)
      const envStatus = requiredEnvVars.reduce((acc, key) => {
        acc[key] = process.env[key] ? "set" : "missing";
        return acc;
      }, {});
      console.error("Environment variable status:", envStatus);
      
      return res.status(500).json({
        success: false,
        message: "Server email config missing",
        missing,
      });
    }

    // Log that env vars are present (without values)
    console.log("✅ Environment variables present:", requiredEnvVars.map(k => `${k}=${process.env[k] ? '***' : 'MISSING'}`).join(", "));
    
    // Log credential lengths for debugging (without values)
    console.log("🔐 Credential check:", {
      userLength: process.env.SMTP_USER?.length || 0,
      passLength: process.env.SMTP_PASSWORD?.length || 0,
      userAfterTrim: process.env.SMTP_USER?.trim().length || 0,
      passAfterTrim: process.env.SMTP_PASSWORD?.trim().length || 0,
    });

    let transporter;
    try {
      transporter = createTransporter();
      console.log("✅ Transporter created successfully");
    } catch (transporterError) {
      console.error("❌ Failed to create transporter:", transporterError.message);
      console.error("Transporter error stack:", transporterError.stack);
      return res.status(500).json({
        success: false,
        message: "Failed to initialize email service",
        error: transporterError.message,
      });
    }
    
    // Log transporter config (without sensitive data)
    console.log("📧 Transporter config:", {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      hasUser: !!process.env.SMTP_USER,
      hasPass: !!process.env.SMTP_PASSWORD,
    });

    // If verify fails, you'll see it in Vercel logs (still try send)
    try {
      await transporter.verify();
      console.log("✅ SMTP verified");
    } catch (e) {
      console.log("⚠️ SMTP verify failed (may be OK):", e?.message);
    }

    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || "NXXIM"}" <${process.env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ""),
    });

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("❌ Send error:", error);
    
    // Provide helpful error messages for common Office365 issues
    let userMessage = "Failed to send email";
    let troubleshooting = "";
    
    if (error?.code === 'EAUTH' || error?.responseCode === 535) {
      userMessage = "Email authentication failed. This is usually an Office365 account policy issue.";
      troubleshooting = `
Possible solutions:
1. If this is a work/school account, SMTP AUTH might be disabled. Contact your IT administrator to enable SMTP AUTH.
2. Check if the account has conditional access policies blocking SMTP.
3. Verify the app-specific password is correct and hasn't expired.
4. Try creating a new app-specific password.
5. For business accounts, SMTP AUTH may need to be enabled in Microsoft 365 admin center.
      `;
    }
    
    return res.status(500).json({
      success: false,
      message: userMessage,
      error: error?.message,
      code: error?.code,
      troubleshooting: troubleshooting.trim(),
    });
  }
};
