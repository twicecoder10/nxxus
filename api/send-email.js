/**
 * Vercel Serverless Function for Sending Emails
 * 
 * This function handles email sending via SMTP in a Vercel serverless environment.
 * 
 * Environment Variables Required (set in Vercel dashboard):
 * - SMTP_HOST
 * - SMTP_PORT
 * - SMTP_USER
 * - SMTP_PASSWORD
 * - SMTP_FROM_EMAIL
 * - SMTP_FROM_NAME
 * - ADMIN_EMAIL
 */

const nodemailer = require('nodemailer');

// Email config from environment variables (with fallbacks for local development)
const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.stackmail.com',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    auth: {
      user: process.env.SMTP_USER || 'support@ivoirebagagexpress.com',
      password: process.env.SMTP_PASSWORD || 'Lk254def0'
    }
  },
  from: {
    name: process.env.SMTP_FROM_NAME || 'NXXIM',
    email: process.env.SMTP_FROM_EMAIL || 'support@ivoirebagagexpress.com'
  },
  adminEmail: process.env.ADMIN_EMAIL || 'ag@geneva.pe'
};

// Create transporter (recreated on each invocation for serverless)
function createTransporter() {
  const port = emailConfig.smtp.port;
  const secure = port === 465; // Port 465 uses SSL/TLS
  
  return nodemailer.createTransport({
    host: emailConfig.smtp.host,
    port: port,
    secure: secure,
    auth: emailConfig.smtp.auth,
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000, // 10 seconds
    socketTimeout: 10000, // 10 seconds
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates if needed
    }
  });
}

// Vercel serverless function handler
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { type, to, subject, html, text, userName, formData } = req.body;

    // Validate required fields
    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        message: 'Missing required email fields: to, subject, and html are required'
      });
    }

    // Validate SMTP configuration
    if (!emailConfig.smtp.host || !emailConfig.smtp.auth.user || !emailConfig.smtp.auth.password) {
      console.error('SMTP configuration missing:', {
        host: emailConfig.smtp.host ? 'set' : 'missing',
        user: emailConfig.smtp.auth.user ? 'set' : 'missing',
        password: emailConfig.smtp.auth.password ? 'set' : 'missing'
      });
      return res.status(500).json({
        success: false,
        message: 'Email server configuration error. Please contact support.',
        error: 'SMTP configuration incomplete'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify connection (optional but helpful for debugging)
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      // Continue anyway - some servers don't support verify
    }

    // Prepare mail options
    const mailOptions = {
      from: `"${emailConfig.from.name}" <${emailConfig.from.email}>`,
      to: to,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, '') // Fallback to plain text if no text provided
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    console.error('Error code:', error.code);
    
    // More detailed error logging
    if (error.response) {
      console.error('SMTP Error Response:', error.response);
    }
    if (error.code) {
      console.error('Error Code:', error.code);
    }

    // Return more detailed error in production for debugging
    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message || 'Unknown error',
      code: error.code || 'UNKNOWN',
      details: process.env.VERCEL_ENV === 'production' ? undefined : {
        stack: error.stack,
        name: error.name
      }
    });
  }
};
