import siteData from "@/config/site.json";
import servicesData from "@/data/services.json";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";

import type {
  Experience,
  SectionConfig,
  Service,
  SiteData,
  SkillCategory,
} from "@/types/portfolio";

export const site = siteData as SiteData;

export const sections = (site.sections as SectionConfig[])
  .filter((section) => section.enabled)
  .toSorted((a, b) => a.sortOrder - b.sortOrder);

export const navigation = sections.filter(
  (section) => section.navigation,
);

export const services = (servicesData as Service[]).toSorted(
  (a, b) => a.sortOrder - b.sortOrder,
);

export const skillCategories = (
  skillsData as SkillCategory[]
).toSorted((a, b) => a.sortOrder - b.sortOrder);

export const experience = (
  experienceData as Experience[]
).toSorted((a, b) => a.sortOrder - b.sortOrder);
