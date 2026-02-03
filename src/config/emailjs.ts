// EmailJS Configuration using Environment Variables
// For local development: Update .env.local with your credentials
// For Vercel deployment: Add these as environment variables in Vercel dashboard

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

// Validate configuration
if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
  console.warn('⚠️ EmailJS is not configured. Please set environment variables.')
}

// Template variables you can use in EmailJS template:
// {{from_name}} - User's name
// {{from_email}} - User's email
// {{gender}} - User's gender
// {{response}} - User's response (Yes/No/Denied)
// {{timestamp}} - When they responded
