# PowerShell deployment script for GitHub Pages
Write-Host "🚀 Building and deploying to GitHub Pages..." -ForegroundColor Cyan

# Build the Angular application
Write-Host "📦 Building Angular app..." -ForegroundColor Yellow
ng build --base-href "/practical-apps/"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    # Deploy to GitHub Pages
    Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
    npx angular-cli-ghpages --dir=dist/practical-apps/browser
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Deployment successful!" -ForegroundColor Green
        Write-Host "🔗 Your site is live at: https://jzon-03.github.io/practical-apps/" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Deployment failed!" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
}