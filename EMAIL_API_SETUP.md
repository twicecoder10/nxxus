# Modern Email API Setup Guide

## Why Switch from SMTP?

- ✅ **No SMTP AUTH issues** - Modern APIs use secure tokens
- ✅ **Better deliverability** - Dedicated email services have better reputation
- ✅ **Analytics & tracking** - Built-in email analytics
- ✅ **Vercel-friendly** - Designed for serverless functions
- ✅ **Future-proof** - Not affected by Basic Auth deprecation
- ✅ **Simpler setup** - Just an API key, no complex SMTP config

## Option 1: Resend (Recommended - Best for Vercel)

### Setup Steps:

1. **Sign up for Resend**: https://resend.com
   - Free tier: 3,000 emails/month
   - Very Vercel-friendly
   - Simple API

2. **Get your API key**:
   - Go to https://resend.com/api-keys
   - Create a new API key
   - Copy it

3. **Verify your domain** (optional but recommended):
   - Go to https://resend.com/domains
   - Add your domain (e.g., `nxxim.com`)
   - Add DNS records to verify
   - This improves deliverability

4. **Update Vercel Environment Variables**:
   ```
   EMAIL_SERVICE=resend
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=info@nxxim.com
   SMTP_FROM_NAME=NXXIM
   ```

5. **Update your API endpoint**:
   - Rename `api/send-email.js` to `api/send-email-smtp.js` (backup)
   - Rename `api/send-email-resend.js` to `api/send-email.js`
   - Or update `src/services/email.service.ts` to use the new endpoint

6. **Deploy and test**

### Resend Pricing:
- **Free**: 3,000 emails/month
- **Pro**: $20/month for 50,000 emails
- Very affordable for most use cases

---

## Option 2: SendGrid (Alternative)

### Setup Steps:

1. **Sign up for SendGrid**: https://sendgrid.com
   - Free tier: 100 emails/day
   - Good for high volume

2. **Get your API key**:
   - Go to Settings → API Keys
   - Create API key with "Mail Send" permissions
   - Copy it

3. **Verify your domain** (recommended):
   - Go to Settings → Sender Authentication
   - Add and verify your domain

4. **Update Vercel Environment Variables**:
   ```
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=SG.your_api_key_here
   SENDGRID_FROM_EMAIL=info@nxxim.com
   SMTP_FROM_NAME=NXXIM
   ```

5. **Update your API endpoint** (same as Resend)

### SendGrid Pricing:
- **Free**: 100 emails/day
- **Essentials**: $19.95/month for 50,000 emails
- Good for high-volume sending

---

## Quick Migration Steps

### Step 1: Choose Your Service
- **Resend**: Best for Vercel, simpler, 3,000 emails/month free
- **SendGrid**: More features, 100 emails/day free

### Step 2: Get API Key
- Sign up and create an API key

### Step 3: Update Environment Variables in Vercel
- Add the new variables (see above)
- Keep old SMTP vars as backup if needed

### Step 4: Update Code
```bash
# Backup old SMTP implementation
mv api/send-email.js api/send-email-smtp.js

# Use new Resend implementation
mv api/send-email-resend.js api/send-email.js
```

### Step 5: Update Frontend (if needed)
The frontend code in `src/services/email.service.ts` should work as-is since the API endpoint structure is the same.

### Step 6: Deploy and Test
- Push to git (Vercel will auto-deploy)
- Test the contact form
- Check email delivery

---

## Comparison

| Feature | Resend | SendGrid | Office365 SMTP |
|---------|--------|----------|----------------|
| Setup Complexity | ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Hard |
| Vercel Compatibility | ⭐⭐⭐ Excellent | ⭐⭐⭐ Excellent | ⭐⭐ Poor |
| Free Tier | 3,000/month | 100/day | N/A |
| Deliverability | ⭐⭐⭐ Excellent | ⭐⭐⭐ Excellent | ⭐⭐ Good |
| Analytics | ✅ Yes | ✅ Yes | ❌ No |
| Future-proof | ✅ Yes | ✅ Yes | ❌ No |

---

## Recommendation

**Use Resend** - It's the most Vercel-friendly option:
- Simple setup
- Great free tier
- Excellent documentation
- Built for modern serverless apps

---

## Need Help?

1. **Resend Docs**: https://resend.com/docs
2. **SendGrid Docs**: https://docs.sendgrid.com
3. **Vercel Email Guide**: https://vercel.com/guides/sending-emails-with-resend

