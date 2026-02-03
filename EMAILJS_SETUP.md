# EmailJS Setup Guide

This app uses EmailJS to send email notifications when users interact with the Valentine's Day app.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Valentine's Day Response from {{from_name}}

Hello!

You have a new response from your Valentine's Day app:

Name: {{from_name}}
Email: {{from_email}}
Gender: {{gender}}
Response: {{response}}
Timestamp: {{timestamp}}

---
This email was sent from your Valentine's Day app.
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Update Configuration

**For Local Development:**

Open `.env.local` and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

**For Vercel Deployment:**

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for instructions on adding environment variables to Vercel.

## Step 6: Test

1. Restart your dev server: `npm run dev`
2. Fill out the form and submit
3. Check your email inbox for the notification

## Template Variables Available

The app sends these variables to your email template:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{gender}}` - Male or Female
- `{{response}}` - "Yes" or "Denied"
- `{{timestamp}}` - When they responded

## Troubleshooting

**Emails not sending?**
- Check browser console for errors
- Verify all IDs are correct in `emailjs.ts`
- Make sure you've verified your email service in EmailJS
- Check EmailJS dashboard for delivery status

**Want to change the email content?**
- Edit the template in your EmailJS dashboard
- Changes take effect immediately, no code changes needed

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service
- Basic support

Upgrade if you need more volume.
