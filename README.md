# Khawaja Azfar Asif - Portfolio Website 🚀

A modern, responsive, and feature-rich portfolio website built with HTML, CSS, and vanilla JavaScript.

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # Interactive features
├── images/
│   ├── Profile.jpg     # Your profile photo
│   ├── YoloV26 pic.jpg # Publication image
│   └── favicon.png     # Website favicon
├── files/
│   └── KhawajaAzfar_CV.pdf  # Your CV
└── README.md           # This file
```

## 🎯 Features

### ✨ Design Features
- **Modern & Clean Layout** - Professional two-column design with sidebar
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark-Friendly Colors** - Beautiful blue and accent color scheme
- **Smooth Animations** - Fade-in and slide animations for elements
- **Professional Typography** - Google Fonts (Inter, JetBrains Mono)

### 🔧 Functional Features
- **Activity Filtering** - Filter activities by year (All, 2024, 2023, 2022)
- **Smooth Scrolling** - Anchor links with smooth scroll behavior
- **Scroll-to-Top Button** - Auto-appearing button when scrolling
- **Interactive Cards** - Hover effects on all interactive elements
- **Mobile Optimized** - Perfect performance on all devices
- **SEO Optimized** - Structured data, meta tags, and Open Graph

### 📊 Sections Included
1. **Sidebar** - Profile, badges, contact links, and quick stats
2. **About Me** - Introduction, research highlights, and interests
3. **News & Activities** - Timeline of events with filtering
4. **Publications** - Research papers and preprints
5. **Call-to-Action** - "Let's Connect" closing section

## 🚀 Setup Instructions

### Step 1: Prepare Your Files

1. **Create a folder structure:**
   ```bash
   mkdir portfolio
   cd portfolio
   mkdir images files
   ```

2. **Add your files:**
   - Place your profile photo as `images/Profile.jpg`
   - Place your publication image as `images/YoloV26 pic.jpg`
   - Place your favicon as `images/favicon.png`
   - Place your CV as `files/KhawajaAzfar_CV.pdf`

### Step 2: Copy Code Files

Copy these three files into your portfolio folder:
- `index.html` - Main HTML
- `styles.css` - All styling
- `script.js` - JavaScript functionality

### Step 3: Update Personal Information

In `index.html`, update:
- Email: `khawajaazfar@protonmail.com` → your email
- LinkedIn URL: Update the LinkedIn profile link
- GitHub URL: Update your GitHub profile
- Google Scholar: Update your Scholar profile
- CV path: Ensure `files/KhawajaAzfar_CV.pdf` exists
- Image paths: Verify `images/Profile.jpg` and `images/YoloV26 pic.jpg` exist

## 💻 Local Testing

### Using Python (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run in your portfolio folder
http-server
```

Visit: `http://localhost:8080`

### Using Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Click "Open with Live Server"

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select "main" branch as source
   - Save

3. **Your site will be live at:**
   ```
   https://yourusername.github.io/portfolio/
   ```

### Option 2: Netlify (Free & Easy)

1. **Sign up at** [netlify.com](https://netlify.com)
2. **Drag & drop your folder** into Netlify
3. **Get instant deployment** with custom domain option

### Option 3: Vercel (Free & Fast)

1. **Sign up at** [vercel.com](https://vercel.com)
2. **Connect your GitHub repo** or upload files
3. **Automatic deployments** on every push

### Option 4: Traditional Hosting

1. Upload all files via FTP to your hosting provider
2. Ensure folder structure matches:
   ```
   /public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── images/
   └── files/
   ```

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
  --color-primary: #2563eb;        /* Main blue */
  --color-primary-dark: #1e40af;   /* Darker blue */
  --color-accent: #f59e0b;         /* Orange accent */
  /* ... more variables ... */
}
```

### Fonts
Change fonts in the `<link>` tags in `index.html`:
- Current: Inter (body) and JetBrains Mono (code)
- Alternative: Roboto, Open Sans, Poppins, etc.

### Spacing & Sizes
Edit CSS variables for consistent spacing:
- `--spacing-*`: For margins and padding
- `--font-size-*`: For text sizes
- `--radius-*`: For border radius

### Adding More Sections
1. Copy an existing section structure
2. Update the content and section ID
3. Add styling if needed
4. Update navigation links

## 📱 Responsive Breakpoints

The website is optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

Test by opening DevTools (F12) and using Device Toolbar.

## 🔍 SEO Optimization

The website includes:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (for social sharing)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Fast loading with lazy image loading

**To improve further:**
- Submit sitemap to Google Search Console
- Add `sitemap.xml` and `robots.txt`
- Build backlinks from other sites
- Regularly update content

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths match exactly
- Image files should be in `/images/` folder
- Use forward slashes in paths: `images/Profile.jpg`

### Styles Not Loading
- Verify `styles.css` is in the root folder
- Check browser console for errors (F12)
- Clear browser cache (Ctrl+Shift+Delete)

### JavaScript Not Working
- Verify `script.js` is in the root folder
- Check console for errors (F12)
- Ensure jQuery isn't required (it's not)

### Layout Breaking on Mobile
- Test with actual devices
- Use Chrome DevTools device toolbar
- Check viewport meta tag is present

## 📈 Performance Tips

1. **Optimize Images:**
   - Compress images with TinyPNG
   - Use WebP format for better compression
   - Keep images under 500KB

2. **Minify CSS/JS (Optional):**
   - Use minifiers for production
   - Minified versions load faster

3. **Use CDN:**
   - Font Awesome is already via CDN
   - Google Fonts is already via CDN

4. **Caching:**
   - Enable browser caching on server
   - Use service workers for offline access

## 📝 Updates & Maintenance

### Monthly Tasks
- [ ] Update news/activities section
- [ ] Check all external links work
- [ ] Review analytics

### Quarterly Tasks
- [ ] Add new publications
- [ ] Update stats (5+ publications, 10+ events)
- [ ] Refresh profile photo if needed
- [ ] Update CV file

### Yearly Tasks
- [ ] Review overall design
- [ ] Update past experience
- [ ] Check for broken links
- [ ] Update contact information

## 📞 Support & Questions

### For Issues:
1. Check console (F12) for error messages
2. Verify all files are in correct locations
3. Try different browser
4. Clear cache and reload

### For Customization Help:
- CSS Documentation: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- JavaScript: [JavaScript.info](https://javascript.info)
- HTML: [HTML Standard](https://html.spec.whatwg.org)

## 📄 License

This portfolio template is free to use and modify. Feel free to customize it for your needs!

---

## 🎓 Next Steps

1. **Test locally** - Run with Live Server or Python
2. **Customize** - Update colors, fonts, and content
3. **Add media** - Upload your images
4. **Deploy** - Choose your hosting and go live
5. **Share** - Tell everyone about your amazing portfolio!

---

**Created with ❤️ for Khawaja Azfar Asif**

Last Updated: May 2026
