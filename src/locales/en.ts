import type { ResumeData } from '../types/resume';

export const enData: ResumeData = {
  title: "Resume",
  profile: {
    title: "Profile",
    basicInfo: {
      title: "Basic Information",
      name: "Name: Hisaki Tomita",
      age: "Age: 32 (1992/02/02)",
      location: "Location: Kashiwa, Chiba",
      email: "e-mail: tomita@wyrd.co.jp",
      education: "Education: Meijo University, Faculty of Science and Technology",
      certifications: "Certifications: Ruby Gold, FE, AP"
    },
    selfIntroduction: {
      title: "Self Introduction",
      content: "I develop web applications mainly using Ruby on Rails.\nI also have experience in frontend development using Vue.js, React, and TypeScript.\nI'm looking to further develop my frontend skills and am interested in UI/UX."
    }
  },
  workExperience: {
    title: "Work Experience",
    skills: {
      title: "Skills",
      programmingLanguages: {
        title: "Programming Languages",
        content: "Ruby, JavaScript, TypeScript\nReact, Vue.js"
      },
      frameworks: {
        title: "Frameworks/Technologies",
        content: "Ruby on Rails(Ruby), Next.js(React), Remix(React)\nMySQL, PostgreSQL"
      },
      others: {
        title: "Others",
        content: "Git, GitHub, Docker, AWS, Backlog, Notion, Slack, Gather, Shopify"
      }
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "SaaS (Logistics DX) Application Development",
          period: "Period: Jan 2024 ~ Present",
          industry: "Industry: Logistics",
          responsibilities: "Responsibilities:",
          details: "Backend development using Ruby on Rails\nFrontend development using Vue.js"
        },
        {
          title: "Company Website Operation & Maintenance",
          period: "Period: Oct 2023 ~ Dec 2023",
          industry: "Industry: E-commerce",
          responsibilities: "Responsibilities:",
          details: "E-commerce site operation & maintenance\nExtension app development"
        },
        {
          title: "Educational Site Renovation & Development",
          period: "Period: Jun 2023 ~ Oct 2023",
          industry: "Industry: Education",
          responsibilities: "Responsibilities:",
          details: "Migration from CakePHP to frontend (React) and server-side (Rails)\nAPI integration with core systems"
        },
        {
          title: "Programming Study (RUNTEQ)",
          period: "Period: Aug 2022 ~ May 2023",
          industry: "Application Development",
          responsibilities: "",
          details: "Technologies: Ruby on Rails, MySQL, AWS S3, Heroku"
        }
      ]
    }
  }
};
