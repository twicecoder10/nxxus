# Office365/Outlook SMTP Authentication Fix

## Problem
You're getting this error:
```
535 5.7.139 Authentication unsuccessful, the request did not meet the criteria to be authenticated successfully.
```

This happens because Office365/Outlook requires special authentication settings.

## Solution

### Step 1: Update Environment Variables

For Office365/Outlook, use these SMTP settings:

**In Vercel (or your hosting platform):**

1. **SMTP_HOST**: `smtp.office365.com` (or `smtp-mail.outlook.com`)
2. **SMTP_PORT**: `587` (NOT 465 - Office365 uses STARTTLS on port 587)
3. **SMTP_USER**: Your full Office365 email address (e.g., `yourname@outlook.com`)
4. **SMTP_PASSWORD**: **App-specific password** (see Step 2 below)
5. **SMTP_FROM_EMAIL**: Same as SMTP_USER
6. **SMTP_FROM_NAME**: `NXXIM`

### Step 2: Create an App-Specific Password

Office365 accounts with MFA (Multi-Factor Authentication) enabled require app-specific passwords:

1. Go to https://account.microsoft.com/security
2. Sign in with your Microsoft account
3. Click on **Security** → **Advanced security options**
4. Under **App passwords**, click **Create a new app password**
5. Give it a name (e.g., "NXXIM Email Service")
6. Copy the generated password (you'll only see it once!)
7. Use this password as your `SMTP_PASSWORD` environment variable

**Note:** If you don't have MFA enabled, you may need to:
- Enable MFA first, OR
- Use your regular password (less secure, not recommended)

### Step 3: Verify SMTP Settings

The updated code now properly handles Office365:
- Port 587 with STARTTLS (secure: false, requireTLS: true)
- Proper TLS configuration for Office365

### Step 4: Test the Configuration

After updating environment variables:

1. **Redeploy** your application (Vercel will pick up new env vars)
2. Test the contact form
3. Check Vercel function logs for any errors

## Alternative: Use a Different Email Service

If Office365 continues to cause issues, consider:

1. **SendGrid** (recommended for production)
   - Free tier: 100 emails/day
   - More reliable for transactional emails
   - Better deliverability

2. **Mailgun**
   - Free tier: 5,000 emails/month
   - Good for high-volume sending

3. **AWS SES**
   - Very cost-effective
   - Requires AWS account setup

## Troubleshooting

### Still getting authentication errors?

1. **Check if MFA is enabled:**
   - If yes, you MUST use an app-specific password
   - Regular passwords won't work with MFA enabled

2. **Verify the email address:**
   - Make sure `SMTP_USER` is the full email (e.g., `user@outlook.com`)
   - Not just the username

3. **Check port number:**
   - Office365: Use port **587** (not 465)
   - The code now defaults to 587

4. **Check Vercel logs:**
   - Go to Vercel Dashboard → Your Deployment → Functions → `api/send-email`
   - Look for detailed error messages

### Common Issues

- **"Invalid login"**: Usually means wrong password or need app-specific password
- **"Connection timeout"**: Check firewall/network settings
- **"TLS error"**: The updated code should handle this now

## Quick Reference

**Office365 SMTP Settings:**
```
Host: smtp.office365.com
Port: 587
Security: STARTTLS (secure: false, requireTLS: true)
Auth: Required (use app-specific password if MFA enabled)
```

**Environment Variables:**
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM_EMAIL=your-email@outlook.com
SMTP_FROM_NAME=NXXIM
```

