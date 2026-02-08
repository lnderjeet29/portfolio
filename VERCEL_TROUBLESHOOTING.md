# Vercel Deployment Troubleshooting Guide

## Error: "An unexpected error occurred" during "Preparing Git Repository"

This is a common Vercel deployment issue. Here are solutions:

## Solution 1: Wait and Retry (Most Common)

Sometimes Vercel has temporary service issues. Try:
1. Wait 2-3 minutes
2. Click "Redeploy" or try deploying again
3. The issue often resolves itself

## Solution 2: Verify Repository Access

1. Go to Vercel Dashboard → Settings → Git
2. Make sure your GitHub account is connected
3. Check that `lnderjeet29/portfolio` repository is accessible
4. If needed, disconnect and reconnect GitHub

## Solution 3: Check Build Settings

Your `vercel.json` is already configured correctly:
- Build Command: `npm run build` ✅
- Output Directory: `dist` ✅
- Framework: `vite` ✅

But verify in Vercel Dashboard:
1. Go to your project settings
2. Check "Build & Development Settings"
3. Ensure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Solution 4: Delete and Re-import Project

1. In Vercel Dashboard, delete the current project
2. Go to "Add New Project"
3. Re-import `lnderjeet29/portfolio`
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

## Solution 5: Check Repository Name

Make sure Vercel is importing:
- **Correct repository**: `lnderjeet29/portfolio` (lowercase 'l')
- Not: `Inderjeet29/portfolio` (uppercase 'I')

## Solution 6: Manual Deployment via Vercel CLI

If web interface keeps failing:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd "d:\personal project\portfolio"
vercel --prod
```

## Solution 7: Check Node.js Version

Vercel might need a specific Node.js version. Add to `package.json`:

```json
"engines": {
  "node": ">=18.0.0"
}
```

## Solution 8: Alternative - Use Netlify

If Vercel continues to have issues, try Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. "Add new site" → "Import an existing project"
4. Select `lnderjeet29/portfolio`
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy

---

## Quick Checklist Before Retrying:

- [ ] Repository is public or you've granted Vercel access
- [ ] GitHub account is connected to Vercel
- [ ] Build settings are correct (Vite, dist folder)
- [ ] No syntax errors in code (we already verified this)
- [ ] Try waiting 2-3 minutes and redeploy

---

**Most likely solution**: Wait 2-3 minutes and click "Redeploy" in Vercel dashboard. This error is often temporary.

