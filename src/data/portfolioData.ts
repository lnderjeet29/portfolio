export interface PersonalInfo {
  name: string
  location: string
  phone: string
  email: string
  linkedin: string
  github: string
}

export interface Experience {
  title: string
  company: string
  location?: string
  period: string
  description: string[]
}

export interface Project {
  name: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  cgpa: string
  image?: string
}

export const personalInfo: PersonalInfo = {
  name: 'Inderjeet Yadav',
  location: 'Meerut, Uttar Pradesh',
  phone: '+91 7037314662',
  email: 'inderjeetdev33@gmail.com',
  linkedin: 'https://www.linkedin.com/in/inderjeetdev/',
  github: 'https://github.com/lnderjeet29',
}

export const summary = `Backend Developer with experience in Java, Spring Boot, and backend system development. Skilled in building scalable REST APIs, integrating PostgreSQL/MySQL, and supporting cloud deployments using AWS and CI/CD pipelines. Strong debugging, troubleshooting, and code optimization skills. Seeking backend roles to deliver reliable and high-performance services.`

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'HCL Tech',
    location: 'Noida',
    period: 'February 2025 – Present',
    description: [
      'Worked on NUS (National University of Singapore) project using TIBCO EBX (MDM) for enterprise master data management.',
      'Maintained health check reports and supported platform stability, validation, and operational monitoring.',
      'Managed master data updates and workflow configurations to ensure data consistency and smooth system operations.',
      'Supported team in system upgrade activities, including update validation and issue resolution.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Codefylabs Corporation',
    location: 'Toronto, Canada - Remote',
    period: 'January 2024 – August 2024',
    description: [
      'Developed backend services for BurnOn, an AI-powered fitness coaching platform generating personalized workouts based on user goals and performance.',
      'Designed and maintained scalable REST APIs and improved backend code structure for maintainability and performance.',
      'Supported cloud deployments and backend stability, ensuring smooth releases and reliable system behavior.',
      'Integrated AI-driven services like Timefold.ai to automate and optimize planning workflows.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'ManageWise – Business Management Backend Services',
    description: 'Built backend services for managing business operations and structured data with secure and scalable REST APIs. Designed database schema and optimized queries in PostgreSQL to ensure data consistency and performance. Dockerized services and deployed on AWS, supporting automated delivery using CI/CD pipelines.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD'],
    githubUrl: 'https://github.com/lnderjeet29/ManageWise',
  },
  {
    name: 'Recruitment Automation Platform',
    description: 'Developed backend automation services for a recruitment workflow where recruiters post jobs and candidates are sourced from Shine.com and Naukri.com. Implemented candidate scoring, shortlisting, and recruitment pipeline tracking. Built async job execution using Celery workers and deployed Dockerized services on AWS ECS Fargate with CI/CD automation.',
    techStack: ['Python', 'Celery', 'Web Automation', 'AWS ECS Fargate', 'Docker', 'CI/CD', 'PostgreSQL/MySQL'],
  },
]

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Java', 'Kotlin', 'Python (basic)'],
  },
  {
    category: 'Frameworks',
    skills: ['Spring Boot', 'JPA', 'Hibernate', 'JWT'],
  },
  {
    category: 'Cloud/DevOps',
    skills: [
      'AWS (EC2, S3, RDS, Lambda, ECS Fargate, CodeBuild)',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'Maven',
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
    ],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Testing/Tools',
    skills: ['JUnit', 'Rest Assured', 'Postman', 'Git'],
  },
  {
    category: 'AI & Automation Tools',
    skills: [
      'Cursor (AI-assisted IDE)',
      'ChatGPT',
      'Claude',
      'Timefold',
      'ElevenLabs',
      'Knowlarity',
    ],
  },
  {
    category: 'Concepts',
    skills: ['Microservices', 'SDLC', 'Agile/Scrum', 'OOP', 'Debugging', 'Troubleshooting'],
  },
]

export const education: Education[] = [
  {
    degree: 'MCA – Master of Computer Applications',
    institution: 'Manipal University, Jaipur',
    period: '2022 – 2024',
    cgpa: 'CGPA: 7.76',
    image: '/assets/manipal-university.jpg',
  },
  {
    degree: 'B.Sc Computer Science',
    institution: 'IIMT University, Meerut',
    period: '2019 – 2022',
    cgpa: 'CGPA: 8.3',
    image: '/assets/iimt-university.jpg',
  },
]

