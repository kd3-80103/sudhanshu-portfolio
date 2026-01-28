export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  techStack: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'Plati-one',
    role: 'Java Full Stack Developer',
    duration: 'Feb 2025 – Present',
    description: 'Worked mainly on Communication & Campaign systems, transactional notifications (WhatsApp OTP, emails), and backend integrations for marketplace, CRM, chat system, and action calendar.',
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'Angular', 'TypeScript', 'MySQL']
  },
  {
    company: 'Portfolio Project',
    role: 'Full Stack Developer',
    duration: '2026',
    description: 'Built my personal portfolio from scratch, deployed it using Docker on a free cloud platform. Showcases Hero, Projects, About, Skills, and Experience sections with modern UI/UX.',
    techStack: ['Docker', 'Render', 'Angular', 'Typescript', 'Tailwind CSS']
  }
];