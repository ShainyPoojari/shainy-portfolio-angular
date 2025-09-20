import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projects: Project[];
}

interface Project {
  name: string;
  description: string;
  impact: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      id: '1',
      company: 'Robert Bosch',
      position: 'Senior Frontend Engineer',
      location: 'Bangalore, India',
      period: '2022 - Present',
      startDate: '2022',
      current: true,
      description: 'Leading frontend development for critical business applications in energy management and industrial automation, driving digital transformation initiatives.',
      responsibilities: [
        'Architecting and developing scalable frontend applications using Angular 17',
        'Leading a team of 5+ developers in building enterprise-grade solutions',
        'Implementing energy management platforms with real-time data visualization',
        'Collaborating with cross-functional teams for IoT and manufacturing solutions',
        'Mentoring junior developers and conducting technical reviews'
      ],
      achievements: [
        'Reduced energy costs by 15% for client facilities through optimization dashboards',
        'Improved manufacturing workflow efficiency by 25% with MES frontend',
        'Successfully delivered 10+ enterprise applications on time and within budget',
        'Led digital transformation initiatives across multiple Bosch facilities'
      ],
      technologies: ['Angular 17', 'React','TypeScript', 'JavaScript','HTML5', 'CSS3','SCSS','NgRx','Redux','TailwindCss','Bootstrap', 'Angular Material','Jasmine' , 'Karma','Cypress','Git','Jenkins','REST APIs','TFS', 'Agile','CI/CD'],
      projects: [
        {
          name: 'DEEPSights - Energy Management Platform',
          description: 'Intelligent energy management platform that transforms sensor data into actionable insights with interactive dashboards.',
          impact: 'Reduced energy costs by 15% for client facilities',
          technologies: ['Angular 17', 'Highcharts', 'BOSCH Webcore', 'TailwindCss','Chart.js']
        },
        {
          name: 'METALSA MES - Manufacturing Execution System) ',
          description: 'A manufacturing execution system enabling data traceability and streamlined production planning for automotive chassis production.',
          impact: 'Increased production efficiency, ensured product quality, and improved traceability across the entire manufacturing process.',
          technologies: ['Angular 17+','Machine Learning APIs', 'mongoDB']
        },
        {
          name: 'TEAMS & QMM Systems',
          description: 'Task management platform and quality management module for manufacturing operations.',
          impact: 'Improved team productivity and reduced defects by 20%',
          technologies: ['Angular','React','TypeScript', 'Material Design', 'REST APIs']
        },
        {
          name: 'IPM - IoT AI Parking',
          description: 'AI-driven parking solution with computer vision for real-time occupancy detection.',
          impact: 'Reduced parking search time by 30%',
          technologies: ['Angular', 'Material Design', 'Machine Learning APIs']
        },
         {
          name: 'BAME - Bosch Aspect Model Editor',
          description: 'A visualization tool that enables Bosch Germany teams to design and analyze business models, improving collaboration and decision-making in internal operations.',
          impact: 'Simplified model creation and enhanced clarity for strategic planning.',
          technologies: ['Angular', 'Material Design', 'Bosch aspect editor']
        }
      ]
    },
    {
      id: '2',
      company: 'Homigo Realty',
      position: 'Frontend Developer',
      location: 'Bangalore, India',
      period: '2019 - 2022',
      startDate: '2019',
      endDate: '2022',
      current: false,
      description: 'Developed comprehensive web platform for real estate operations, enabling digital transformation of property management processes.',
      responsibilities: [
        'Built responsive web applications using Angular and React',
        'Implemented real estate CRM with advanced search and filtering',
        'Developed property listing and tenant management systems',
        'Integrated payment processing and communication tools',
        'Collaborated with backend team for API development'
      ],
      achievements: [
        'Delivered complete real estate platform serving 1000+ users',
        'Enhanced agent productivity by 18% through workflow automation',
        'Implemented secure payment processing increasing conversion by 25%',
        'Reduced manual processes by 40% through digital transformation'
      ],
      technologies: ['Angular 4-12', 'React', 'JavaScript', 'CSS3', 'Bootstrap', 'REST APIs'],
      projects: [
        {
          name: 'Homigo Realty Platform',
          description: 'Comprehensive web platform for property listings, tenant applications, and lease management.',
          impact: 'Digitized key processes improving efficiency by 40%',
          technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Payment Gateway']
        }
      ]
    },
 
  ];

  stats = [
    { number: '7+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { number: '2', label: 'Leading Companies', icon: 'fas fa-building' },
    { number: '7+', label: 'Projects Delivered', icon: 'fas fa-project-diagram' },
    { number: '15+', label: 'Technologies', icon: 'fas fa-cogs' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  calculateDuration(startDate: string, endDate?: string): string {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    
    let duration = '';
    if (years > 0) duration += `${years} year${years > 1 ? 's' : ''}`;
    if (months > 0) duration += `${duration ? ' ' : ''}${months} month${months > 1 ? 's' : ''}`;
    
    return duration || '1 month';
  }
}
