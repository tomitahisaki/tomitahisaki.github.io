export interface ResumeData {
  title: string;
  profile: {
    title: string;
    basicInfo: {
      title: string;
      name: string;
      age: string;
      location: string;
      email: string;
      education: string;
      certifications: string;
    };
    selfIntroduction: {
      title: string;
      content: string;
    };
  };
  workExperience: {
    title: string;
    skills: {
      title: string;
      programmingLanguages: {
        title: string;
        content: string;
      };
      frameworks: {
        title: string;
        content: string;
      };
      others: {
        title: string;
        content: string;
      };
    };
    projects: {
      title: string;
      list: Array<{
        title: string;
        period: string;
        industry: string;
        responsibilities: string;
        details: string;
      }>;
    };
  };
}
