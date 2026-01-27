export interface Skill {
  name: string;
  level: number; // 0-100
}

export const SKILLS: Skill[] = [
  { name: 'Angular', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'Spring Boot', level: 75 },
  { name: 'MySQL', level: 70 },
  { name: 'TypeScript', level: 80 },
  { name: 'REST API', level: 75 },
  { name: 'Docker', level: 70 }
];
