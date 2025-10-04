# Practical Apps - Application Storefront

A modern, responsive storefront showcasing full-stack applications built with Angular, .NET Core, and SQLite. This project serves as a portfolio and demonstration of practical software solutions.

## 🚀 Featured Applications

### FixMate
A comprehensive maintenance and repair management system for tracking issues, scheduling repairs, and managing service requests with real-time status updates.

**Technologies:** Angular, TypeScript, .NET Core, SQLite, Entity Framework

### PetNess
A complete pet care management platform for tracking health records, appointments, vaccinations, and daily care activities for your beloved pets.

**Technologies:** Angular, .NET Core, SQLite, TypeScript, RESTful API

## 🛠️ Technology Stack

- **Frontend:** Angular 20, TypeScript, SCSS
- **Backend:** .NET Core, Entity Framework
- **Database:** SQLite
- **Styling:** Custom CSS with modern design principles
- **Icons:** Custom SVG icons and Lucide icons

## 🌐 Live Demo

Visit the live storefront: [GitHub Pages URL will be here]

## 📦 Development Setup

### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jzon-03/practical-apps.git
cd practical-apps
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

## 🚢 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project includes GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Push your code to GitHub
2. Go to Settings > Pages in your repository
3. Set Source to "GitHub Actions"
4. The site will automatically deploy on every push to main branch

### Manual Deployment

```bash
# Build for production
ng build --configuration production --base-href "/practical-apps/"

# Deploy to GitHub Pages (using angular-cli-ghpages)
npx angular-cli-ghpages --dir=dist/practical-apps
```

## 📁 Project Structure

```
src/
├── app/
│   ├── app.ts              # Main component with app data
│   ├── app.html            # Storefront template
│   ├── app.scss            # Component styles
│   ├── app-module.ts       # App module configuration
│   └── app-routing-module.ts # Routing configuration
├── styles.scss             # Global styles
└── index.html             # Main HTML file
```

## 🎨 Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Modern UI:** Clean, professional design with gradient accents
- **Interactive Cards:** Hover effects and smooth animations
- **Technology Tags:** Visual representation of tech stack
- **Social Links:** Easy access to GitHub and other profiles
- **SEO Ready:** Proper meta tags and semantic HTML

## 🔧 Customization

### Adding New Apps

1. Update the `apps` signal in `src/app/app.ts`:

```typescript
{
  id: '3',
  name: 'Your App Name',
  description: 'App description...',
  technologies: ['Angular', '.NET Core', 'SQLite'],
  demoUrl: 'https://your-demo-url.com',
  githubUrl: 'https://github.com/yourusername/your-app',
  featured: true,
  iconColor: 'linear-gradient(135deg, #color1 0%, #color2 100%)'
}
```

### Updating Styles

- Global styles: `src/styles.scss`
- Component styles: `src/app/app.scss`
- Color scheme: Update CSS custom properties in the SCSS files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 👨‍💻 Author

**jzon-03**
- GitHub: [@jzon-03](https://github.com/jzon-03)
- Portfolio: [Practical Apps](https://jzon-03.github.io/practical-apps/)

---

⭐ Don't forget to give this project a star if you found it helpful!
