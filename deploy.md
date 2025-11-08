# 🚀 EduFounder Deployment Guide

## Quick Deploy to Vercel

### Method 1: One-Click Deploy
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Select your repository → Deploy

### Method 2: CLI Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Environment Variables to Add in Vercel:
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAphbG168lBe_-wSQy9b2wDM0mZ8u-YvBU
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=edufoundermvp.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=edufoundermvp
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=edufoundermvp.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=699292276483
NEXT_PUBLIC_FIREBASE_APP_ID=1:699292276483:web:49fe13f1892637a54e7b36
```

## Your Project Features:
✅ Next.js 15.1.7
✅ TypeScript
✅ Tailwind CSS
✅ Framer Motion animations
✅ Firebase authentication
✅ PWA enabled
✅ Responsive design
✅ Modern UI components

## After Deployment:
- Your app will be live at: `https://your-project-name.vercel.app`
- Auto-deployments on every git push
- Built-in analytics and performance monitoring

## Test These Features:
1. 🏠 Landing page with hero section
2. 📚 Features with glassmorphism cards
3. 💬 Testimonials with counting animation
4. 🎯 AI Showcase with floating cards
5. ℹ️ About page with image slider
6. 🔐 Authentication system
7. 📱 PWA functionality

Happy deploying! 🎉