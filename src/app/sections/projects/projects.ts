import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../data/projects.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  standalone: true,
  imports: [CommonModule] 
})
export class ProjectsComponent {

  projects: Project[] = PROJECTS;

}
