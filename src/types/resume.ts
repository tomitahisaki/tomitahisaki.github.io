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
      items: string[];
    }>;
  };
  experience: {
    title: string;
    list: Array<{
      position: string;
      company: string;
      period: string;
      location: string;
      responsibilities: string[];
    }>;
  };
  projects: {
    title: string;
    list: Array<{
      name: string;
      period: string;
      technologies: string[];
      description: string;
      achievements: string[];
    }>;
  };
  education: {
    title: string;
    degrees: Array<{
      degree: string;
      institution: string;
      period: string;
      location: string;
    }>;
    certifications: Array<{
      name: string;
      issuer: string;
      date: string;
    }>;
  };
  publications: {
    title: string;
    list: Array<{
      title: string;
      type: string;
      date: string;
      url?: string;
      description: string;
    }>;
  };
}
