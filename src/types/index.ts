export type TimeSignature = {
  beats: number;
  noteValue: number;
  name: string;
};

export type SoundType = 'woodblock' | 'digital' | 'beep808' | 'rimshot';

export type Subdivision = 'quarter' | 'eighth' | 'triplet' | 'sixteenth';

export interface ProjectFeature {
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number;
    tag: string;
    highlight?: boolean;
  }[];
}

export interface ArchitectureModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet: string;
  language: string;
  highlights: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  tagline: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface AwardItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  badgeText: string;
}
