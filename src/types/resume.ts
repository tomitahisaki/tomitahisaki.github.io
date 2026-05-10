export interface PublicationItem {
  title: string;
  url?: string;
}

export interface PublicationCategory {
  name: string;
  url?: string;
  items: PublicationItem[];
}

export interface SkillItem {
  title: string;
  details?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  overview: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
}

export interface ResumeData {
  header: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: {
    title: string;
    content: string;
  };
  skills: {
    title: string;
    categories: Array<{
      name: string;
      items: string[] | SkillItem[];
    }>;
  };
  projects: {
    title: string;
    labels: {
      technologies: string;
      responsibilities: string;
      achievements: string;
    };
    experiences: WorkExperience[];
  };
  education: {
    title: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
  publications: {
    title: string;
    categories: PublicationCategory[];
  };
}
