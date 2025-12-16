/**
 * Backend API Endpoint for Sending Emails
 * 
 * This is a Node.js/Express backend endpoint that handles email sending securely.
 * 
 * To use this:
 * 1. Install dependencies: npm install nodemailer express cors
 * 2. Set up your backend server (Express.js recommended)
 * 3. Include this endpoint in your backend routes
 * 
 * Example Express.js setup:
 * 
 * const express = require('express');
 * const cors = require('cors');
 * const app = express();
 * 
 * app.use(cors());
 * app.use(express.json());
 * 
 * // Include this route
 * app.post('/api/send-email', require('./api/send-email'));
 * 
 * app.listen(3001, () => {
 *   console.log('Server running on port 3001');
 * });
 */

const nodemailer = require('nodemailer');

// Import email config (adjust path as needed)
// For Node.js, you'll need to convert the TypeScript config to JavaScript
// or use a config file that works in Node.js
const emailConfig = {
  smtp: {
    host: 'smtp.stackmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'support@ivoirebagagexpress.com',
      password: 'Lk254def0'
    }
  },
  from: {
    name: 'NXXIM',
    email: 'support@ivoirebagagexpress.com'
  },
  adminEmail: 'info@nxxim.com'
};

// Create transporter
const transporter = nodemailer.createTransport({
  host: emailConfig.smtp.host,
  port: emailConfig.smtp.port,
  secure: emailConfig.smtp.secure,
  auth: emailConfig.smtp.auth
});

// Verify connection (only log, don't block startup)
transporter.verify(function (error, success) {
  if (error) {
    console.log('⚠️  SMTP connection warning:', error.message);
    console.log('   Emails may not send until SMTP is configured correctly.');
  } else {
    console.log('✅ SMTP server is ready to send emails');
  }
});

async function sendEmailHandler(req, res) {
  try {
    const { type, to, subject, html, text, userName, formData } = req.body;

    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        message: 'Missing required email fields'
      });
    }

    const mailOptions = {
      from: `"${emailConfig.from.name}" <${emailConfig.from.email}>`,
      to: to,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, '') // Fallback to plain text if no text provided
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    res.json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
}

module.exports = sendEmailHandler;

// If running as standalone server (for testing)
if (require.main === module) {
  const express = require('express');
  const cors = require('cors');
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.post('/api/send-email', sendEmailHandler);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Email API server running on port ${PORT}`);
  });
}

