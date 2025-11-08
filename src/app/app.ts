import { Component, signal } from '@angular/core';

interface AppInfo {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  purchaseUrl?: string;
  githubUrl?: string;
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
  protected readonly title = signal('Practical Apps');
  protected readonly currentYear = new Date().getFullYear();

  protected readonly apps = signal<AppInfo[]>([
    {
      id: '1',
      name: 'FixMate',
      description: 'A comprehensive maintenance and repair management system for tracking issues, scheduling repairs, and managing service requests with real-time status updates.',
      technologies: ['Angular', 'TypeScript', '.NET Core', 'SQLite', 'Entity Framework'],
      demoUrl: 'https://jzon-03.github.io/fixmate/',
      githubUrl: 'https://github.com/jzon-03/fixmate',
      featured: true,
      iconColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: '2',
      name: 'PetNess',
      description: 'A complete pet care management platform for tracking health records, appointments, vaccinations, and daily care activities for your beloved pets.',
      technologies: ['Angular', '.NET Core', 'SQLite', 'TypeScript', 'RESTful API'],
      demoUrl: 'https://jzon-03.github.io/petness/',
      githubUrl: 'https://github.com/jzon-03/petness',
      featured: true,
      iconColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: '3',
      name: 'Habio',
      description: 'A comprehensive Home & Family management application designed to help organize household tasks, manage family schedules, and streamline daily family life.',
      technologies: ['Angular', '.NET Core', 'SQLite', 'TypeScript', 'Entity Framework'],
      purchaseUrl: 'https://jzon.gumroad.com/l/oaisqq',
      featured: true,
      iconColor: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
    }
  ]);

  protected getTechnologies(): string[] {
    const allTechs = this.apps().flatMap(app => app.technologies);
    return [...new Set(allTechs)].sort();
  }
}
