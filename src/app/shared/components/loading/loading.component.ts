import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {

  loadingMessages = [
    'Initializing Portfolio...',
    'Loading Projects...',
    'Setting up Experience...',
    'Preparing Skills...',
    'Almost Ready...'
  ];

  currentMessage = 'Loading Portfolio';
  messageIndex = 0;
  messageInterval: any;

  ngOnInit() {
    // Cycle through loading messages
    this.messageInterval = setInterval(() => {
      this.messageIndex = (this.messageIndex + 1) % this.loadingMessages.length;
      this.currentMessage = this.loadingMessages[this.messageIndex];
    }, 800);
  }

  ngOnDestroy() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
    }
  }
}
