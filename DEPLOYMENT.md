# GitHub Pages Deployment Guide

## Quick Setup for GitHub Pages

### 1. Repository Setup
1. Create a new repository on GitHub (e.g., `practical-apps`)
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit: App storefront with FixMate and PetNess"
git branch -M main
git remote add origin https://github.com/yourusername/practical-apps.git
git push -u origin main
```

### 2. GitHub Pages Configuration
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 3. Customization Before Deployment

#### Update GitHub Links
In `src/app/app.html`, replace:
```html
href="https://github.com/yourusername"
```
With your actual GitHub username.

#### Update Repository Name in Workflow
If your repository name is different from `practical-apps`, update the base-href in `.github/workflows/deploy.yml`:
```yaml
run: npm run build -- --configuration production --base-href "/your-repo-name/"
```

#### Update App Links
In `src/app/app.ts`, update the demo and GitHub URLs:
```typescript
demoUrl: 'https://your-demo-url.com',
githubUrl: 'https://github.com/yourusername/your-app-repo',
```

### 4. Your Site Will Be Available At:
```
https://thepracticalapps.com/
```

## Local Development

### Start Development Server
```bash
npm start
```
Visit: http://localhost:4200

### Build for Production
```bash
npm run build
```

### Test Production Build Locally
```bash
# Install a simple HTTP server
npm install -g http-server

# Build and serve
npm run build
cd dist/practical-apps
http-server
```

## Features of Your Storefront

✅ **Responsive Design** - Works on all devices
✅ **Modern UI** - Professional gradient design
✅ **App Showcase** - Featured cards for FixMate and PetNess  
✅ **Technology Stack** - Displays your tech expertise
✅ **Auto-deployment** - Updates automatically when you push to GitHub
✅ **SEO Ready** - Optimized for search engines

## Next Steps

1. **Add Real Links**: Update the demo and GitHub URLs once you deploy FixMate and PetNess
2. **Add Screenshots**: Consider adding app screenshots to enhance the visual appeal
3. **Add More Apps**: Easily add more applications as you build them
4. **Custom Domain**: Optionally set up a custom domain in GitHub Pages settings

## Support

If you encounter any issues, check:
- GitHub Actions tab for deployment status
- Console for any JavaScript errors
- Repository settings for Pages configuration