import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  
  skills = [
    { name: 'Angular', level: 90, icon: 'fab fa-angular', experience: '6+ years', description: 'Expert in Angular 4-17, enterprise applications with TypeScript and RxJS.' },
    { name: 'React', level: 80, icon: 'fab fa-react', experience: '5+ years', description: 'Proficient in React 16-18, hooks, and state management.' },
    { name: 'TypeScript', level: 90, icon: 'fas fa-code', experience: '5+ years', description: 'Advanced TypeScript for large-scale applications.' },
    { name: 'JavaScript', level: 90, icon: 'fab fa-js-square', experience: '7+ years', description: 'Deep expertise in modern JavaScript ES6+.' },
    { name: 'HTML5 & CSS3', level: 93, icon: 'fab fa-html5', experience: '7+ years', description: 'Semantic HTML5, advanced CSS3, and responsive design.' },
    { name: 'SASS/SCSS', level: 88, icon: 'fab fa-sass', experience: '5+ years', description: 'CSS preprocessing and maintainable architecture.' }
  ];

  projects = [
    {
      title: 'Energy Management Dashboard',
      description: 'Real-time dashboard for monitoring energy consumption across industrial facilities.',
      impact: 'Reduced energy costs by 15%',
      technologies: 'Angular 17, D3.js, TypeScript',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Manufacturing Execution System',
      description: 'Frontend for tracking production orders and monitoring machine performance.',
      impact: 'Reduced manual errors by 25%',
      technologies: 'Angular, Material Design, REST APIs',
      icon: 'fas fa-industry'
    },
    {
      title: 'TEAMS & QMM Systems',
      description: 'Task management and quality management modules for manufacturing operations.',
      impact: 'Improved team productivity globally',
      technologies: 'Angular, TypeScript, RxJS',
      icon: 'fas fa-users'
    },
    {
      title: 'IoT Smart Parking System',
      description: 'AI-driven parking solution with real-time occupancy detection.',
      impact: 'Reduced parking search times by 30%',
      technologies: 'Angular, WebRTC, Google Maps',
      icon: 'fas fa-car'
    }
  ];

  isVisible = false;

  ngOnInit() {
    // Trigger animations after component loads
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  ngAfterViewInit() {
    // Animate skill bars after view loads
    setTimeout(() => {
      this.animateSkillBars();
    }, 800);
  }

  private animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar: any, index: number) => {
      setTimeout(() => {
        const level = this.skills[index]?.level || 0;
        bar.style.width = level + '%';
      }, index * 100);
    });
  }
}
