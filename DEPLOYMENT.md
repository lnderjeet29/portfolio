# Deployment Guide - Push to GitHub

## Step 1: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `portfolio`
3. Description: "Personal portfolio website built with React, TypeScript, and Tailwind CSS"
4. Set to **Public** (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands in your terminal:

```bash
cd "d:\personal project\portfolio"
git push -u origin main
```

If you're prompted for authentication:
- **Option A (Recommended)**: Use GitHub CLI or Personal Access Token
- **Option B**: Use GitHub Desktop app
- **Option C**: Set up SSH keys for easier authentication

## Step 3: Deploy to Free Hosting

### Option 1: Vercel (Easiest - Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import your `portfolio` repository
5. Vercel will auto-detect Vite settings
6. Click **"Deploy"**
7. Your site will be live at `portfolio-xyz.vercel.app`

**Benefits:**
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Fast global CDN

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your `portfolio` repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**
7. Your site will be live at `random-name-123.netlify.app`

### Option 3: GitHub Pages

1. After pushing to GitHub, update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Your repository name
   })
   ```

2. Run deployment:
   ```bash
   npm run deploy
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://lnderjeet29.github.io/portfolio/`

## Troubleshooting

### Authentication Issues

If you get authentication errors:

1. **Use Personal Access Token:**
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token with `repo` scope
   - Use token as password when pushing

2. **Use GitHub CLI:**
   ```bash
   gh auth login
   git push -u origin main
   ```

3. **Use SSH (Recommended for long-term):**
   ```bash
   # Generate SSH key (if you don't have one)
   ssh-keygen -t ed25519 -C "your_email@example.com"
   
   # Add to GitHub: Settings → SSH and GPG keys → New SSH key
   # Then change remote URL:
   git remote set-url origin git@github.com:lnderjeet29/portfolio.git
   git push -u origin main
   ```

## Next Steps After Deployment

1. **Update README** with your live site URL
2. **Add to GitHub profile** by pinning the repository
3. **Share your portfolio** with the live URL!

---

**Your portfolio is ready! 🚀**

