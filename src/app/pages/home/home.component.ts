import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  heroStats = [
    { number: '7+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { number: '50+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
    { number: '15+', label: 'Technologies', icon: 'fas fa-cogs' },
    { number: '100%', label: 'Client Satisfaction', icon: 'fas fa-star' }
  ];

  services = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      description: 'Building scalable web applications with Angular, React, and modern JavaScript frameworks.',
      technologies: ['Angular', 'React', 'TypeScript', 'JavaScript']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Interactive Dashboards',
      description: 'Creating data visualization platforms and analytics dashboards for business insights.',
      technologies: ['D3.js', 'Chart.js', 'Angular Material', 'Bootstrap']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Developing mobile-first, responsive applications that work seamlessly across all devices.',
      technologies: ['CSS3', 'SASS', 'Flexbox', 'CSS Grid']
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance Optimization',
      description: 'Optimizing application performance for exceptional speed and user experience.',
      technologies: ['Webpack', 'Angular CLI', 'PWA', 'Lazy Loading']
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 100);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToProjects(): void {
    this.router.navigate(['/projects']);
  }

  downloadResume(): void {
    console.log('Download resume functionality would be implemented here');
  }
}
