import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES, Experience } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = EXPERIENCES;
  visibleIndexes: Set<number> = new Set();

  ngOnInit() {
    setTimeout(() => this.onWindowScroll(), 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    elements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        this.visibleIndexes.add(i);
      }
    });
  }

  isVisible(index: number): boolean {
    return this.visibleIndexes.has(index);
  }
}
