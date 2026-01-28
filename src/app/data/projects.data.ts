export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Campaign & Communication System',
    description: 'Built scalable campaign & notification engine handling user actions, cold campaigns, and transactional notifications (WhatsApp OTP, email).',
    techStack: ['Java', 'Spring', 'Spring Boot', 'MySQL'],
    image: 'assets/campaign-communication.png'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern animated portfolio built using Angular and Tailwind CSS.',
    techStack: ['Docker', 'Render', 'Angular', 'Typescript', 'Tailwind'],
    image: 'assets/dockerize-portfolio-deployment.png',
    githubUrl: 'https://github.com/kd3-80103/sudhanshu-portfolio',
    liveUrl: 'https://your-portfolio-url.com'
  }
];
