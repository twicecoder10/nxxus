# Email Setup Guide

This guide explains how to set up and configure the email functionality for the demo request form.

## Files Created

1. **`src/config/email.config.ts`** - Email configuration and templates (EDIT THIS FILE TO CUSTOMIZE)
2. **`src/services/email.service.ts`** - Email service functions
3. **`api/send-email.js`** - Backend API endpoint for sending emails
4. **`src/components/ContactContent.tsx`** - Updated contact form component

## Configuration

### Editing SMTP Settings

Edit `src/config/email.config.ts` to update:

- **SMTP Host/Port**: Change `smtp.host` and `smtp.port`
- **SMTP Credentials**: Update `smtp.auth.user` and `smtp.auth.password`
- **From Email**: Modify `from.email` and `from.name`
- **Admin Email**: Change `adminEmail` to receive notifications
- **Email Templates**: Customize the HTML and text templates in `templates.thankYou` and `templates.adminNotification`

### Current SMTP Configuration

```
Host: smtp.stackmail.com
Port: 465
Secure: true
User: support@ivoirebagagexpress.com
Password: Lk254def0
Admin Email: info@nxxim.com
```

## Backend Setup

Since this is a React frontend application, you need a backend API to securely send emails. The backend endpoint is provided in `api/send-email.js`.

### Option 1: Express.js Backend (Recommended)

1. **Install dependencies:**
   ```bash
   npm install nodemailer express cors
   ```

2. **Create a backend server** (e.g., `server.js`):
   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();

   app.use(cors());
   app.use(express.json());

   // Include the email route
   app.post('/api/send-email', require('./api/send-email'));

   const PORT = process.env.PORT || 3001;
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

3. **Run the backend:**
   ```bash
   node server.js
   ```

4. **Update frontend API URL** (if backend is on different port):
   Edit `src/services/email.service.ts` and change the fetch URL from `/api/send-email` to `http://localhost:3001/api/send-email` (or your backend URL).

### Option 2: Serverless Function (Vercel/Netlify)

You can deploy the email endpoint as a serverless function. The structure will depend on your hosting platform.

### Option 3: Third-party Email Service

Consider using services like:
- SendGrid
- Mailgun
- AWS SES
- Resend

These services provide better deliverability and easier setup.

## Email Templates

### Thank You Email (to User)

Sent to the user who requested a demo. Includes:
- Personalized greeting
- Confirmation of request receipt
- What to expect from the demo
- Contact information

**Edit in:** `src/config/email.config.ts` → `templates.thankYou`

### Admin Notification Email

Sent to `info@nxxim.com` when a demo is requested. Includes:
- User contact information
- Organization and role
- User's message (if provided)
- Quick reply link

**Edit in:** `src/config/email.config.ts` → `templates.adminNotification`

## Testing

1. Fill out the contact form on the Contact page
2. Click "Request a Demo"
3. Check:
   - User receives thank you email at their work email
   - Admin receives notification at info@nxxim.com

## Troubleshooting

### Emails not sending

1. **Check SMTP credentials** in `email.config.ts`
2. **Verify backend is running** and accessible
3. **Check browser console** for errors
4. **Verify SMTP server** allows connections from your server IP
5. **Check spam folder** - emails might be filtered

### Backend connection issues

1. Ensure CORS is enabled on backend
2. Check that backend URL matches frontend fetch URL
3. Verify backend is listening on correct port

## Security Notes

⚠️ **Important:** Never commit SMTP passwords to version control. Consider using environment variables:

```javascript
// In email.config.ts or backend
auth: {
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD
}
```

Create a `.env` file (and add it to `.gitignore`):
```
SMTP_USER=support@ivoirebagagexpress.com
SMTP_PASSWORD=Lk254def0
```

## Customization

All email content, styling, and configuration can be edited in `src/config/email.config.ts`. The templates use HTML and can be fully customized to match your brand.

