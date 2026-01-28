import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true,
  imports: [ CommonModule ]
})
export class AboutComponent {
  // For scroll reveal animation
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.getElementById('about-section');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      this.isVisible = true;
    }
  }
}

