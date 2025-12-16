/**
 * Express.js Backend Server for Email API
 * 
 * Run this server to handle email sending requests from the frontend.
 * 
 * Setup:
 * 1. cd api
 * 2. npm install
 * 3. npm start (or npm run dev for development with auto-reload)
 * 
 * The server will run on http://localhost:3001
 * Make sure to update the frontend email service URL if using a different port.
 */

const express = require('express');
const cors = require('cors');
const sendEmailHandler = require('./send-email');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON request bodies

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email API is running' });
});

// Email sending endpoint
app.post('/api/send-email', sendEmailHandler);

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Email API server running on http://localhost:${PORT}`);
  console.log(`📧 Ready to send emails via SMTP\n`);
});

