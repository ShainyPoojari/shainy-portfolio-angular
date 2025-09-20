import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  
  navItems = [
    { label: 'Home', route: '/', icon: 'fas fa-home' },
    { label: 'About', route: '/about', icon: 'fas fa-user' },
    { label: 'Experience', route: '/experience', icon: 'fas fa-briefcase' },
    { label: 'Skills', route: '/skills', icon: 'fas fa-cogs' },
    { label: 'Contact', route: '/contact', icon: 'fas fa-envelope' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  isActiveRoute(route: string): boolean {
    if (route === '/') {
      return this.router.url === '/' || this.router.url === '/home';
    }
    return this.router.url === route;
  }
}
