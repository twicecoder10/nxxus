# Vercel Environment Variables Setup

To fix the 500 error in production, you need to set the following environment variables in your Vercel project:

## Required Environment Variables

Go to your Vercel project dashboard → Settings → Environment Variables and add:

1. **SMTP_HOST**
   - Value: `smtp.stackmail.com`

2. **SMTP_PORT**
   - Value: `465`

3. **SMTP_USER**
   - Value: `support@ivoirebagagexpress.com`

4. **SMTP_PASSWORD**
   - Value: `Lk254def0`

5. **SMTP_FROM_EMAIL**
   - Value: `support@ivoirebagagexpress.com`

6. **SMTP_FROM_NAME**
   - Value: `NXXIM`

7. **ADMIN_EMAIL**
   - Value: `ag@geneva.pe`

## Steps to Add Environment Variables in Vercel

1. Go to https://vercel.com/dashboard
2. Select your project (`Nxxmv3`)
3. Click on **Settings**
4. Click on **Environment Variables** in the sidebar
5. Add each variable above
6. Make sure to select **Production**, **Preview**, and **Development** environments
7. Click **Save**
8. **Redeploy** your application for changes to take effect

## After Adding Variables

After setting the environment variables, you need to redeploy:

1. Go to **Deployments** tab
2. Click the **⋯** menu on the latest deployment
3. Click **Redeploy**

Or push a new commit to trigger a new deployment.

## Testing

After redeploying, test the contact form:
1. Go to `/contact#meeting-form`
2. Fill out the form
3. Submit
4. Check that emails are sent successfully

## Troubleshooting

If you still get 500 errors:
1. Check Vercel function logs: **Deployments** → Click on deployment → **Functions** tab → Click on `api/send-email`
2. Verify all environment variables are set correctly
3. Check SMTP credentials are valid
4. Ensure the SMTP server allows connections from Vercel's IP addresses

