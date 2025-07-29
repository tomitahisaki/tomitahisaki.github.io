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
    categories: Array<{
      name: string;
      items: string[];
    }>;
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
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
}
