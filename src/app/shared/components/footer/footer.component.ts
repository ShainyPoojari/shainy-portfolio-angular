import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  socialLinks = [
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/shainy-poojari', 
    icon: 'fab fa-linkedin',
    color: '#0077b5'  // Keep LinkedIn blue
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/shainy-poojari', 
    icon: 'fab fa-github',
    color: '#c2410c'  // Use primary orange
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com/shainy-poojari', 
    icon: 'fab fa-twitter',
    color: '#d97706'  // Use tertiary orange
  },
  { 
    name: 'Email', 
    url: 'mailto:shainy.poojari@email.com', 
    icon: 'fas fa-envelope',
    color: '#dc2626'  // Use accent red
  }
];


  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Experience', route: '/experience' },
    { label: 'Contact', route: '/contact' }
  ];

  services = [
    'Frontend Development',
    'Angular & React Apps',
    'Dashboard Development',
    'Technical Consulting',
    'Team Leadership'
  ];

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
