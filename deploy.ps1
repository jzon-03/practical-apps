# PowerShell deployment script for GitHub Pages
Write-Host "🚀 Building and deploying to GitHub Pages..." -ForegroundColor Cyan

# Commit any changes first
Write-Host "📝 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Update storefront" 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Changes committed!" -ForegroundColor Green
    git push
} else {
    Write-Host "ℹ️ No changes to commit" -ForegroundColor Blue
}

# Build the Angular application
Write-Host "📦 Building Angular app..." -ForegroundColor Yellow
ng build --base-href "/"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    # Deploy to GitHub Pages
    Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
    npx angular-cli-ghpages --dir=dist/practical-apps/browser --cname=thepracticalapps.com
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Deployment successful!" -ForegroundColor Green
        Write-Host "🔗 Your site is live at: https://thepracticalapps.com/" -ForegroundColor Cyan
        Write-Host "📥 PetNessAPI.zip is available for download!" -ForegroundColor Green
    } else {
        Write-Host "❌ Deployment failed!" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
}