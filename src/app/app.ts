import { Component, HostListener, signal } from '@angular/core';
import { HeroComponent } from './sections/hero/hero';
import { ProjectsComponent } from './sections/projects/projects';
import { AboutComponent } from './sections/about/about';
import { SkillsComponent } from './sections/skills/skills';
import { ExperienceComponent } from './sections/experience/experience';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './sections/footer/footer';
import { ContactModalComponent } from './components/contact-modal/contact-modal';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeroComponent, ProjectsComponent, AboutComponent, SkillsComponent, ExperienceComponent, ContactModalComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isContactModalOpen = false;
  protected readonly title = signal('sudhanshu-portfolio');
  mouseX = 0; mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  toggleContactModal() {
    this.isContactModalOpen = !this.isContactModalOpen;
  }
}
