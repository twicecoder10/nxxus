# SMTP AUTH Still Not Working - Troubleshooting Checklist

## The Error Persists
Even after enabling SMTP AUTH, you're still getting:
```
535 5.7.139 Authentication unsuccessful
```

## Critical Checks

### 1. Verify SMTP AUTH is Enabled for the SPECIFIC Mailbox

SMTP AUTH can be enabled at two levels:
- **Organization-wide** (may not be enough)
- **Per-mailbox** (required)

**Check per-mailbox setting:**

1. Go to **Exchange Admin Center**: https://admin.exchange.microsoft.com
2. Navigate to **Recipients** → **Mailboxes**
3. Find `info@nxxim.com`
4. Click on it → **Mailbox features** tab
5. Look for **SMTP AUTH** setting
6. Make sure it's **Enabled** (not "Disabled" or "Use tenant setting")

**Enable via PowerShell (if you have access):**
```powershell
Set-CASMailbox -Identity "info@nxxim.com" -SmtpClientAuthenticationDisabled $false
```

### 2. Check Conditional Access Policies

Conditional Access policies might be blocking SMTP:

1. Go to **Azure AD** → **Security** → **Conditional Access**
2. Check if any policies block "Legacy authentication" or SMTP
3. You may need to create an exception for SMTP

### 3. Regenerate App-Specific Password

After enabling SMTP AUTH, you might need a new app password:

1. Go to https://account.microsoft.com/security
2. Delete the old app password "Website Form"
3. Create a new app password
4. Update `SMTP_PASSWORD` in Vercel with the new password
5. Redeploy

### 4. Check for IP Restrictions

Some organizations restrict SMTP to specific IPs:

1. Check if there are IP allowlists
2. Vercel uses dynamic IPs, so this might be blocking it
3. You may need to whitelist Vercel's IP ranges (not practical)

### 5. Verify Account Type

Check if `info@nxxim.com` is:
- **Personal account** (should work)
- **Business account** (needs SMTP AUTH enabled per mailbox)
- **Enterprise account** (may have additional restrictions)

## Alternative Solutions

### Option A: Use Microsoft Graph API (More Reliable)

Instead of SMTP, use Microsoft Graph API with OAuth2:
- Works even when SMTP AUTH is disabled
- More secure
- Requires app registration in Azure AD

### Option B: Use a Different Email Service (Recommended)

For production, use a dedicated email service:

**SendGrid** (Best option):
- Free: 100 emails/day
- Better deliverability
- No SMTP AUTH issues
- Easy setup

**Setup SendGrid:**
1. Sign up at https://sendgrid.com
2. Create API key
3. Update Vercel env vars:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   SMTP_FROM_EMAIL=info@nxxim.com
   ```

**Mailgun:**
- Free: 5,000 emails/month
- Good alternative

## Quick Test: Verify SMTP AUTH is Working

Test with a simple SMTP client:

1. Use an email client like **Thunderbird** or **Outlook**
2. Try to connect using:
   - Server: `smtp.office365.com`
   - Port: `587`
   - Security: `STARTTLS`
   - Username: `info@nxxim.com`
   - Password: Your app-specific password
3. If this works, the issue is with the code configuration
4. If this fails, SMTP AUTH is not properly enabled

## Most Likely Issue

Based on the error, the most likely cause is:
**SMTP AUTH is enabled org-wide but NOT for the specific mailbox `info@nxxim.com`**

**Fix:**
1. Enable SMTP AUTH specifically for `info@nxxim.com` mailbox
2. Wait 15-30 minutes
3. Regenerate app-specific password
4. Update Vercel and redeploy

## Next Steps

1. **Verify per-mailbox SMTP AUTH** (most important)
2. **Regenerate app password** after enabling
3. **Test with email client** to confirm SMTP works
4. **If still failing**: Consider switching to SendGrid

