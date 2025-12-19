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
    secure: process.env.SMTP_PORT === '465' || !process.env.SMTP_PORT,
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
  return nodemailer.createTransport({
    host: emailConfig.smtp.host,
    port: emailConfig.smtp.port,
    secure: emailConfig.smtp.secure,
    auth: emailConfig.smtp.auth
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

    // Create transporter
    const transporter = createTransporter();

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
    
    // More detailed error logging
    if (error.response) {
      console.error('SMTP Error Response:', error.response);
    }
    if (error.code) {
      console.error('Error Code:', error.code);
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};
