# How to Add College Images to Education Section

## Quick Steps:

1. **Save your images** from your device/computer
2. **Rename them** to:
   - `manipal-university.jpg` (for Manipal University image)
   - `iimt-university.jpg` (for IIMT University image)
3. **Copy them** to: `portfolio/public/assets/` folder
4. **That's it!** The images will automatically appear in your Education section

## File Locations:

```
portfolio/
└── public/
    └── assets/
        ├── manipal-university.jpg  ← Place Manipal image here
        └── iimt-university.jpg     ← Place IIMT image here
```

## Image Requirements:

- **Format**: .jpg, .jpeg, .png, or .webp
- **Recommended size**: 800x600px or larger
- **File size**: Keep under 500KB for faster loading
- **Aspect ratio**: 4:3 or 16:9 works best

## What the Images Will Look Like:

- **Manipal University**: Will appear on the left side of the MCA degree card
- **IIMT University**: Will appear on the left side of the B.Sc degree card
- Images will have:
  - Smooth hover zoom effect
  - Gradient overlay for text readability
  - Graduation cap icon overlay
  - Shine animation on hover
  - Responsive design (stacks on mobile)

## If Images Don't Appear:

1. Check file names match exactly (case-sensitive)
2. Make sure images are in `public/assets/` folder
3. Restart dev server: `npm run dev`
4. Clear browser cache

## Testing:

After adding images, run:
```bash
npm run dev
```

Visit `http://localhost:5173` and scroll to the Education section to see your college images!

---

**Your Education section is now ready to showcase your colleges beautifully! 🎓**

