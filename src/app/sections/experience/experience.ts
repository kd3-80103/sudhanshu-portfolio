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
  visibleIndexes: number[] = [];

  ngOnInit() {
    // 👇 make all visible on load (CRITICAL FIX)
    this.visibleIndexes = this.experiences.map((_, i) => i);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    elements.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100 && !this.visibleIndexes.includes(i)) {
        this.visibleIndexes.push(i);
      }
    });
  }

  isVisible(index: number): boolean {
    return this.visibleIndexes.includes(index);
  }

  getTimelineItemClasses(index: number) {
    return {
      'transition-all duration-1000 ease-out': true,
      'opacity-0 translate-y-10': !this.isVisible(index),
      'opacity-100 translate-y-0': this.isVisible(index),
      'md:ml-auto': index % 2 === 1,
      'md:mr-auto': index % 2 === 0
    };
  }
}
