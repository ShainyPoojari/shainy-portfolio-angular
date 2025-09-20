import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CareerPhase {
  period: string;
  title: string;
  description: string;
  skills: string[];
}

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  careerJourney: CareerPhase[] = [
    {
      period: '2017 - 2019',
      title: 'Foundation Years',
      description: 'Started my journey in frontend development, mastering the fundamentals of JavaScript, HTML, and CSS. Quickly progressed to working with modern frameworks and building my first production applications.',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap', 'Git']
    },
    {
      period: '2019 - 2022', 
      title: 'Growth & Expertise',
      description: 'Deepened expertise in Angular and React, started working on complex enterprise applications. Developed skills in state management, testing, and performance optimization while contributing to large-scale projects.',
      skills: ['Angular', 'React', 'TypeScript', 'RxJS', 'Jest', 'Webpack', 'SASS']
    },
    {
      period: '2022 - Present',
      title: 'Senior Leadership',
      description: 'Advanced to senior roles, leading frontend development for critical business applications. Mentoring junior developers, architecting scalable solutions, and driving technical excellence across projects.',
      skills: ['Angular 17', 'React 18', 'Node.js', 'Docker', 'AWS', 'Team Leadership', 'Architecture']
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'Performance Excellence',
      description: 'Recognized for exceptional performance and delivery excellence across multiple projects at Robert Bosch and other leading organizations',
      icon: 'fas fa-trophy'
    },
    {
      title: 'Innovation Leader',
      description: 'Acknowledged for going above and beyond project expectations with innovative solutions in energy management and IoT systems',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Team Mentor',
      description: 'Successfully mentored 10+ junior developers in modern frontend development practices and architectural decisions',
      icon: 'fas fa-users'
    },
    {
      title: 'Technical Excellence',
      description: 'Led architecture decisions for enterprise applications serving 10,000+ users in manufacturing and industrial automation',
      icon: 'fas fa-cogs'
    }
  ];

  personalInfo = {
    name: 'Shainy V Poojari',
    title: 'Senior Frontend Engineer',
    location: 'Bangalore, India',
    experience: '7+ Years',
    email: 'shainy.poojari@email.com',
    availability: 'Open to opportunities',
    responseTime: 'Within 24 hours'
  };

  skills = [
    { name: 'Angular', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 92 },
    { name: 'JavaScript', level: 95 },
    { name: 'CSS/SASS', level: 88 },
    { name: 'Node.js', level: 80 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
