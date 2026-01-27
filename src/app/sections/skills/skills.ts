import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS, Skill } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  skills: Skill[] = SKILLS;
}
