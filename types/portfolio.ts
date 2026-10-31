export interface SocialLink {
  platform: string;
  url: string;
}

export interface NavigationItem {
  label: string;
  target: string;
}

export interface HeroAction {
  label: string;
  target: string;
}

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  description: string;
  primaryAction: HeroAction | null;
  secondaryAction: HeroAction | null;
}

export interface SectionConfig {
  id: string;
  label: string;
  enabled: boolean;
  navigation: boolean;
  sortOrder: number;
  eyebrow: string;
  title: string;
  description: string;
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
  phone: string | null;
  hero: HeroConfig;
  about: string;
  socials: SocialLink[];
  sections: SectionConfig[];
}

export interface Service {
  id: string;
  title: string;
  overview: string;
  description: string;
  details: string;
  thumbnail?: string | null;
  gallery?: string[];
  technologies: string[];
  sortOrder: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  overview: string;
  items: string[];
  sortOrder: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  overview: string;
  description: string;
  highlights: string[];
  sortOrder: number;
}
