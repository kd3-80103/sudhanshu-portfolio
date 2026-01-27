import { Component, signal } from '@angular/core';
import { HeroComponent } from './sections/hero/hero';
import { ProjectsComponent } from './sections/projects/projects';
import { AboutComponent } from './sections/about/about';
import { SkillsComponent } from './sections/skills/skills';
import { ExperienceComponent } from './sections/experience/experience';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, ProjectsComponent, AboutComponent, SkillsComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sudhanshu-portfolio');
}
