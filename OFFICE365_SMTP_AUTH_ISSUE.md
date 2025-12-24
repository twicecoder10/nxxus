# Office365 SMTP Authentication Error Fix

## The Problem

You're getting this error even though credentials are correct:
```
535 5.7.139 Authentication unsuccessful, the request did not meet the criteria to be authenticated successfully.
```

**This is NOT a credential issue** - it's an Office365 account policy issue.

## Root Cause

Office365 business/enterprise accounts often have **SMTP AUTH disabled** by default for security reasons. This blocks applications from using SMTP even with correct credentials.

## Solutions

### Solution 1: Enable SMTP AUTH (For Business/Enterprise Accounts)

If `info@nxxim.com` is a **Microsoft 365 business account**, you need to enable SMTP AUTH:

1. **Go to Microsoft 365 Admin Center**: https://admin.microsoft.com
2. Navigate to **Settings** → **Org settings** → **Modern authentication**
3. Or use **Exchange Admin Center**:
   - Go to https://admin.exchange.microsoft.com
   - Navigate to **Mail flow** → **Settings**
   - Look for **SMTP AUTH** settings
4. Enable SMTP AUTH for the specific mailbox or organization-wide
5. Wait 15-30 minutes for changes to propagate

**Note**: You need admin privileges to do this. If you don't have admin access, contact your IT administrator.

### Solution 2: Use a Personal Outlook Account

If you have a personal Outlook account (not business):
- Personal accounts usually have SMTP AUTH enabled by default
- Create an app-specific password for the personal account
- Update Vercel environment variables to use the personal account

### Solution 3: Use Microsoft Graph API (Advanced)

Instead of SMTP, use Microsoft Graph API with OAuth2:
- More secure
- Works even when SMTP AUTH is disabled
- Requires more setup (OAuth app registration)

### Solution 4: Use a Different Email Service (Recommended for Production)

For production applications, consider using a dedicated email service:

**SendGrid** (Recommended):
- Free tier: 100 emails/day
- Better deliverability
- More reliable
- Easy setup

**Mailgun**:
- Free tier: 5,000 emails/month
- Good API
- Reliable

**AWS SES**:
- Very cost-effective
- Requires AWS account

## Quick Check: Is SMTP AUTH Enabled?

You can check if SMTP AUTH is enabled for your account:

1. Try connecting with an email client (like Outlook desktop app)
2. If it works there but not in your app, SMTP AUTH might be disabled for "less secure apps"
3. Check your account's security settings

## For Personal Accounts

If this is a **personal Outlook account** (not business):

1. **Double-check the app password**:
   - Go to https://account.microsoft.com/security
   - Check if the app password `wqvjwyphfrqwpqdx` is still active
   - If unsure, create a new one

2. **Verify account security**:
   - Make sure MFA is enabled
   - Ensure the app password was created correctly

3. **Try a different port**:
   - Some networks block port 587
   - Try port 465 (though Office365 prefers 587)

## Current Configuration

Your current setup:
- ✅ Host: `smtp.office365.com`
- ✅ Port: `587`
- ✅ User: `info@nxxim.com`
- ✅ Password: App-specific password (16 chars)
- ✅ TLS: Enabled

The configuration is correct. The issue is account-level policy.

## Next Steps

1. **If business account**: Contact IT admin to enable SMTP AUTH
2. **If personal account**: 
   - Create a new app-specific password
   - Update Vercel environment variable
   - Test again
3. **Alternative**: Switch to SendGrid or another email service for better reliability

## Testing After Fix

After enabling SMTP AUTH or switching services:
1. Redeploy your Vercel application
2. Test the contact form
3. Check Vercel function logs for success messages

