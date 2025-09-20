import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { AnimationService } from './core/services/animation.service';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,  // ✅ Added FooterComponent import
    LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shainy V Poojari - Senior Frontend Engineer';
  isLoading = true;

  constructor(private router: Router, private animationService: AnimationService) {}

 ngOnInit() {
    // Initialize animations
    this.animationService.initializeAOS();

    // Hide loading screen after initialization
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    // Refresh animations on route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.animationService.refreshAOSWithDelay(300);
      });
  }

  private loadExternalAssets() {
    // Load AOS
    const aosScript = document.createElement('script');
    aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    aosScript.onload = () => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          offset: 100
        });
      }
    };
    document.head.appendChild(aosScript);

    // Load AOS CSS
    const aosCSS = document.createElement('link');
    aosCSS.rel = 'stylesheet';
    aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosCSS);
  }
}
