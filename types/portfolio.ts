export interface SocialLink {
  platform: string;
  url: string;
}

export interface NavigationItem {
  label: string;
  target: string;
}

export interface SiteData {
  name: string;
  title: string;
  headline: string;
  description: string;
  location: string;
  avatar: string | null;
  resumeUrl: string | null;
  email: string;
  about: string;
  socials: SocialLink[];
  navigation: NavigationItem[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  technologies: string[];
  thumbnail: string | null;
  gallery: ProjectImage[];
  features: string[];
  links: {
    github: string | null;
    demo: string | null;
  };
  featured: boolean;
  sortOrder: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  sortOrder: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  sortOrder: number;
}
