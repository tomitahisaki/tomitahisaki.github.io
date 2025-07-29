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
  projects: {
    title: string;
    list: Array<{
      name: string;
      period: string;
      company?: string;
      position?: string;
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
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
}
