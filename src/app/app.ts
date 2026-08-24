import { Component, signal } from '@angular/core';

interface AppInfo {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  purchaseUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  iconColor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
   title = 'about-me';
  currentYear = new Date().getFullYear();

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
