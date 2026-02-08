# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Showcasing Inderjeet Yadav's experience, projects, and skills as a Backend Developer.

## 🚀 Features

- **Dark Tech Theme** - Modern dark theme with tech-inspired colors
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Fast Performance** - Built with Vite for optimal build times and performance
- **Type-Safe** - Written in TypeScript for better code quality
- **SEO Friendly** - Semantic HTML and proper meta tags

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/lnderjeet29/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 🚀 Deployment

### Option 1: Vercel (Recommended - Easiest)

Vercel provides the easiest deployment experience with automatic CI/CD.

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/lnderjeet29/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your `portfolio` repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Your site is live!** 
   - You'll get a URL like `portfolio-xyz.vercel.app`
   - Every push to main branch will trigger automatic deployment

4. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Netlify

Netlify is another excellent option with similar ease of use.

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your `portfolio` repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Your site is live!**
   - You'll get a URL like `random-name-123.netlify.app`
   - Automatic deployments on every push

4. **Custom Domain:**
   - Go to Site settings → Domain management
   - Add custom domain and configure DNS

### Option 3: GitHub Pages

GitHub Pages is free and perfect for static sites.

1. **Update vite.config.ts for GitHub Pages:**
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Replace 'portfolio' with your repo name
   })
   ```

2. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/lnderjeet29/portfolio.git
   git push -u origin main
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```
   This will create a `gh-pages` branch and push the build to it.

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select `gh-pages` branch
   - Folder: `/ (root)`
   - Click Save

5. **Your site is live!**
   - URL: `https://lnderjeet29.github.io/portfolio/`
   - To update: Run `npm run deploy` after making changes

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Footer.tsx
│   ├── data/            # Data layer
│   │   └── portfolioData.ts
│   ├── styles/          # Global styles
│   │   └── globals.css
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Updating Content

All portfolio content is stored in `src/data/portfolioData.ts`. Update this file to change:

- Personal information
- Work experience
- Projects
- Skills
- Education

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',        // Background color
    surface: '#111111',   // Card/surface color
    card: '#1a1a1a',      // Card background
  },
  accent: {
    primary: '#00d9ff',   // Primary accent (cyan)
    secondary: '#3b82f6', // Secondary accent (blue)
  },
}
```

### Adding Sections

1. Create a new component in `src/components/`
2. Add it to `App.tsx`
3. Add navigation link in `Header.tsx`
4. Update `portfolioData.ts` if needed

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Inderjeet Yadav**

- Email: inderjeet-yadav@hcltech.com
- LinkedIn: [linkedin.com/in/inderjeetdev](https://www.linkedin.com/in/inderjeetdev)
- GitHub: [github.com/lnderjeet29](https://github.com/lnderjeet29)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

