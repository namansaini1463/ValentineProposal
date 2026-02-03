# Deploying to Vercel

This guide will help you deploy your Valentine's Day app to Vercel with EmailJS integration.

## Prerequisites

- GitHub/GitLab/Bitbucket account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- EmailJS account configured (see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md))

## Step 1: Prepare Your Repository

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub/GitLab/Bitbucket:
```bash
git remote add origin YOUR_REPO_URL
git branch -M main
git push -u origin main
```

## Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository**
3. Select your Valentine's Day app repository
4. Click **Import**

## Step 3: Configure Environment Variables

**IMPORTANT:** Before deploying, add your environment variables:

1. In Vercel project settings, go to **Settings** → **Environment Variables**

2. Add these three variables:

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS Service ID | Production, Preview, Development |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key | Production, Preview, Development |

**To add each variable:**
- Click **Add New**
- Enter the **Name** (e.g., `VITE_EMAILJS_SERVICE_ID`)
- Enter the **Value** (your actual EmailJS credential)
- Check all three environments: **Production**, **Preview**, and **Development**
- Click **Save**

## Step 4: Deploy

1. Click **Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your app will be live at `your-app-name.vercel.app`

## Step 5: Test Your Deployment

1. Visit your deployed app URL
2. Fill out the form and submit
3. Check your email to confirm notifications are working

## Updating Your Deployment

Every time you push to your repository:
- Vercel automatically rebuilds and redeploys
- Changes go live in 1-2 minutes

To manually redeploy:
1. Go to your Vercel project dashboard
2. Click **Deployments**
3. Click the three dots on any deployment
4. Select **Redeploy**

## Environment Variables Explained

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service identifier
- `VITE_EMAILJS_TEMPLATE_ID`: Your email template identifier
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key for browser requests

**Why VITE_ prefix?**
Vite only exposes environment variables that start with `VITE_` to your client-side code. This is a security feature.

## Custom Domain (Optional)

To use your own domain:
1. Go to **Settings** → **Domains**
2. Add your domain name
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

## Troubleshooting

**Build fails?**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try running `npm run build` locally first

**Emails not sending?**
- Verify environment variables are set correctly in Vercel
- Check browser console for errors
- Confirm EmailJS credentials are valid
- Check EmailJS dashboard for delivery status

**App not loading styles?**
- Clear your browser cache
- Check if build completed successfully
- Verify Tailwind CSS is configured correctly

## Vercel CLI (Alternative Deployment)

You can also deploy using Vercel CLI:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

The CLI will prompt you to add environment variables if they're missing.

## Performance Tips

Vercel automatically optimizes your app:
- ✅ Edge caching
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Compression
- ✅ Image optimization

Your Valentine's Day app will load fast worldwide! 🚀

## Free Tier Limits

Vercel's free (Hobby) tier includes:
- Unlimited deployments
- 100GB bandwidth per month
- Automatic HTTPS
- Preview deployments for PRs
- Analytics (basic)

Perfect for personal projects!

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- EmailJS Docs: [emailjs.com/docs](https://www.emailjs.com/docs/)
