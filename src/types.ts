export interface NavItem {
  label: string;
  path: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  architectureDetails?: string[];
  techStack: string[];
  category: 'Data Analytics' | 'Generative AI' | 'Full Stack' | 'Research & Hardware' | 'Applications';
  githubLink?: string;
  liveLink?: string;
  image: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  type: string;
  period: string;
  description: string[];
  techStack: string[];
  impactPoints?: string[];
}

export interface Education {
  id: string;
  institution: string;
  year: string;
  degree: string;
  grade?: string;
  description: string[];
  achievements?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  credentialId?: string;
  category: 'IBM / Coursera' | 'Microsoft' | 'Specialized Architecture' | 'Other';
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    note?: string;
  }[];
}
