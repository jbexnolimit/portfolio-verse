import siteData from "@/data/site.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";

import type {
  Experience,
  Project,
  SiteData,
  SkillCategory,
} from "@/types/portfolio";

export const site = siteData as SiteData;

export const projects = (projectsData as Project[]).toSorted(
  (a, b) => a.sortOrder - b.sortOrder,
);

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export const skillCategories = (
  skillsData as SkillCategory[]
).toSorted((a, b) => a.sortOrder - b.sortOrder);

export const experience = (
  experienceData as Experience[]
).toSorted((a, b) => a.sortOrder - b.sortOrder);
