# Quick Start: Email Setup

## The Error You're Seeing

If you see: **"There was an error submitting your request"**, it means the backend email API server is not running.

## Solution: Start the Backend Server

### Step 1: Install Backend Dependencies

Open a terminal in the `api` folder and run:

```bash
cd api
npm install
```

This will install:
- `express` - Web server
- `nodemailer` - Email sending library
- `cors` - Cross-origin resource sharing

### Step 2: Start the Backend Server

```bash
npm start
```

You should see:
```
✅ Email API server running on http://localhost:3001
📧 Ready to send emails via SMTP
```

### Step 3: Update Frontend API URL (if needed)

If your backend runs on a different port, create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001/api/send-email
```

Then restart your frontend dev server.

## Alternative: Use a Different Port

If port 3001 is already in use, edit `api/server.js` and change:

```javascript
const PORT = process.env.PORT || 3001; // Change 3001 to another port
```

## Testing

1. Make sure backend is running (you should see the success message)
2. Fill out the contact form
3. Click "Request a Demo"
4. Check:
   - Success message appears
   - User receives email at their work email
   - Admin receives email at info@nxxim.com

## Troubleshooting

### "Backend server is not running"
- Make sure you ran `npm install` in the `api` folder
- Make sure you ran `npm start` in the `api` folder
- Check that port 3001 (or your configured port) is not blocked

### "Failed to send email" or SMTP errors
- Check SMTP credentials in `src/config/email.config.ts`
- Verify SMTP server allows connections
- Check firewall settings

### CORS errors
- Make sure `cors` is installed in backend
- Verify backend URL matches frontend fetch URL

## Need Help?

Check `README_EMAIL_SETUP.md` for detailed documentation.

