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
    techStack: ['Java', 'Spring Boot', 'MySQL'],
    image: 'assets/campaign-communication.png'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern animated portfolio built using Angular and Tailwind CSS.',
    techStack: ['Angular', 'Tailwind'],
    image: 'assets/portfolio-sudhanshu.jpg',
    githubUrl: 'https://github.com/your-username/portfolio',
    liveUrl: 'https://your-portfolio-url.com'
  }
];
