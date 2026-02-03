# 💖 Valentine's Day App

A fun and interactive Valentine's Day app built with React, TypeScript, Vite, and Tailwind CSS. Features email notifications via EmailJS!

## ✨ Features

- **User Form**: Collects name, email, and gender
- **Gender-Based Flow**: Different experiences for male and female users
- **Interactive Question**: "Will you be my Valentine?" with playful button interactions
- **Moving "No" Button**: Impossible to click - moves away on hover/click
- **Growing "Yes" Button**: Increases in size as user tries to click "No"
- **Celebration Screen**: Confetti animation and success message
- **Email Notifications**: Automatically sends responses to your email via EmailJS
- **Fully Responsive**: Works perfectly on mobile and desktop devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- EmailJS account (free - [sign up here](https://www.emailjs.com/))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS:
   - See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions
   - Copy `.env.example` to `.env.local`
   - Add your EmailJS credentials to `.env.local`

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## 📧 Email Setup

The app sends you an email notification when:
- A user submits the form (for male users who get denied)
- A user clicks "Yes" to be your Valentine

**Quick Setup:**
1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add an email service and create a template
3. Copy your Service ID, Template ID, and Public Key
4. Add these to `.env.local` file (see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md))

## 🚀 Deploy to Vercel

Ready to share your app with the world?

1. Push your code to GitHub/GitLab/Bitbucket
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed deployment instructions.

## 🛠️ Tech Stack

- **Vite**: Fast build tool and development server
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **canvas-confetti**: Confetti animation library
- **EmailJS**: Email service integration

## 📱 How It Works

1. **User Form**: Enter your name, email, and select gender
2. **Male Users**: Get a playful denial message (email notification sent)
3. **Female Users**: Proceed to the Valentine's question
4. **Interactive Buttons**: 
   - "Yes" button: Click to accept (email notification sent)
   - "No" button: Try to click it... if you can! 😏
5. **Success**: Celebrate with confetti and a sweet message

## 🎨 Responsive Design

The app is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px and up)
- 💻 Tablets and laptops
- 🖥️ Desktop screens

## 📝 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎉 Have Fun!

This app is meant to bring joy and laughter. Share it with your loved ones this Valentine's Day! 💕
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
