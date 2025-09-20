import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var AOS: any;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private isBrowser: boolean;
  private isAOSInitialized: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Initialize AOS (Animate On Scroll) library
   */
  initializeAOS(): void {
    if (!this.isBrowser) return;

    // Load AOS if not already loaded
    if (!this.isAOSLoaded()) {
      this.loadAOSLibrary().then(() => {
        this.setupAOS();
      });
    } else {
      this.setupAOS();
    }
  }

  /**
   * Setup AOS with custom configuration
   */
  private setupAOS(): void {
    if (typeof AOS !== 'undefined' && !this.isAOSInitialized) {
      AOS.init({
        duration: 800,                // Animation duration
        easing: 'ease-in-out',       // Easing function
        once: true,                  // Animation triggers only once
        offset: 100,                 // Offset from viewport
        delay: 0,                    // Default delay
        disable: false,              // Disable animations on mobile
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99
      });
      
      this.isAOSInitialized = true;
      console.log('AOS initialized successfully');
    }
  }

  /**
   * Refresh AOS animations
   */
  refreshAOS(): void {
    if (!this.isBrowser || typeof AOS === 'undefined') return;

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }

  /**
   * Refresh AOS with delay
   */
  refreshAOSWithDelay(delay: number = 500): void {
    if (!this.isBrowser) return;

    setTimeout(() => {
      this.refreshAOS();
    }, delay);
  }

  /**
   * Disable AOS animations
   */
  disableAOS(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ disable: true });
    }
  }

  /**
   * Enable AOS animations
   */
  enableAOS(): void {
    if (typeof AOS !== 'undefined') {
      AOS.init({ disable: false });
      this.refreshAOS();
    }
  }

  /**
   * Check if AOS library is loaded
   */
  private isAOSLoaded(): boolean {
    return typeof AOS !== 'undefined';
  }

  /**
   * Dynamically load AOS library
   */
  private loadAOSLibrary(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.isBrowser) {
        resolve();
        return;
      }

      // Load AOS CSS
      const aosCSS = document.createElement('link');
      aosCSS.rel = 'stylesheet';
      aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
      aosCSS.integrity = 'sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==';
      aosCSS.crossOrigin = 'anonymous';
      document.head.appendChild(aosCSS);

      // Load AOS JavaScript
      const aosScript = document.createElement('script');
      aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
      aosScript.integrity = 'sha512-A7AYk1fGKX6S2SsHywmPkrnzTZHrgiVT7GcQkLGDe2ev0aWb8zejytzS8wjo7PGEXKqJOrjQ4oORtnimIRZBtw==';
      aosScript.crossOrigin = 'anonymous';
      aosScript.async = true;
      
      aosScript.onload = () => {
        console.log('AOS library loaded successfully');
        resolve();
      };
      
      aosScript.onerror = () => {
        console.error('Failed to load AOS library');
        reject(new Error('Failed to load AOS library'));
      };
      
      document.head.appendChild(aosScript);
    });
  }

  // ===========================================
  // CUSTOM ANIMATION UTILITIES
  // ===========================================

  /**
   * Fade in animation
   */
  fadeIn(element: HTMLElement, duration: number = 600, delay: number = 0): void {
    if (!this.isBrowser || !element) return;

    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
    }, delay);
  }

  /**
   * Fade in up animation
   */
  fadeInUp(element: HTMLElement, duration: number = 600, delay: number = 0): void {
    if (!this.isBrowser || !element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `all ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
  }

  /**
   * Slide in from left animation
   */
  slideInFromLeft(element: HTMLElement, duration: number = 800, delay: number = 0): void {
    if (!this.isBrowser || !element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateX(-50px)';
    element.style.transition = `all ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    }, delay);
  }

  /**
   * Slide in from right animation
   */
  slideInFromRight(element: HTMLElement, duration: number = 800, delay: number = 0): void {
    if (!this.isBrowser || !element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateX(50px)';
    element.style.transition = `all ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    }, delay);
  }

  /**
   * Scale in animation
   */
  scaleIn(element: HTMLElement, duration: number = 500, delay: number = 0): void {
    if (!this.isBrowser || !element) return;

    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    element.style.transition = `all ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    }, delay);
  }

  /**
   * Rotate in animation
   */
  rotateIn(element: HTMLElement, duration: number = 600, delay: number = 0): void {
    if (!this.isBrowser || !element) return;

    element.style.opacity = '0';
    element.style.transform = 'rotate(-180deg)';
    element.style.transition = `all ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'rotate(0deg)';
    }, delay);
  }

  /**
   * Bounce in animation
   */
  bounceIn(element: HTMLElement, delay: number = 0): void {
    if (!this.isBrowser || !element) return;

    element.style.opacity = '0';
    element.style.transform = 'scale(0.3)';
    element.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    }, delay);
  }

  /**
   * Stagger animation for multiple elements
   */
  staggerAnimation(elements: NodeListOf<HTMLElement> | HTMLElement[], 
                   animationType: 'fadeInUp' | 'slideInFromLeft' | 'scaleIn' = 'fadeInUp',
                   staggerDelay: number = 100): void {
    if (!this.isBrowser || !elements.length) return;

    Array.from(elements).forEach((element, index) => {
      const delay = index * staggerDelay;
      
      switch (animationType) {
        case 'fadeInUp':
          this.fadeInUp(element, 600, delay);
          break;
        case 'slideInFromLeft':
          this.slideInFromLeft(element, 800, delay);
          break;
        case 'scaleIn':
          this.scaleIn(element, 500, delay);
          break;
        default:
          this.fadeInUp(element, 600, delay);
      }
    });
  }

  /**
   * Typing animation effect
   */
  typewriterAnimation(element: HTMLElement, text: string, speed: number = 50): Promise<void> {
    return new Promise((resolve) => {
      if (!this.isBrowser || !element) {
        resolve();
        return;
      }

      let i = 0;
      element.textContent = '';
      
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typeInterval);
          resolve();
        }
      }, speed);
    });
  }

  /**
   * Counter animation
   */
  animateCounter(element: HTMLElement, 
                 from: number = 0, 
                 to: number, 
                 duration: number = 2000,
                 suffix: string = ''): void {
    if (!this.isBrowser || !element) return;

    const startTime = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(from + (to - from) * easeOutQuart);
      
      element.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }

  /**
   * Progress bar animation
   */
  animateProgressBar(element: HTMLElement, percentage: number, duration: number = 1500): void {
    if (!this.isBrowser || !element) return;

    element.style.width = '0%';
    element.style.transition = `width ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.width = `${percentage}%`;
    }, 100);
  }

  /**
   * Parallax scrolling effect
   */
  initializeParallax(selector: string = '.parallax'): void {
    if (!this.isBrowser) return;

    const elements = document.querySelectorAll(selector);
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      
      elements.forEach((element: any) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrollTop * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
  }

  /**
   * Intersection Observer for triggering animations
   */
  observeElements(selector: string, callback: (entry: IntersectionObserverEntry) => void): void {
    if (!this.isBrowser) return;

    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(callback);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => observer.observe(element));
  }

  /**
   * Clean up animations and observers
   */
  destroy(): void {
    if (typeof AOS !== 'undefined') {
      AOS.refreshHard();
    }
  }
}
