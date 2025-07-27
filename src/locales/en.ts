import type { ResumeData } from '../types/resume';

export const enData: ResumeData = {
  header: {
    name: "Hisaki Tomita",
    title: "Full Stack Web Developer",
    email: "tomita@wyrd.co.jp",
    phone: "+81-90-XXXX-XXXX",
    location: "Kashiwa, Chiba, Japan",
    linkedin: "https://linkedin.com/in/hisaki-tomita",
    github: "https://github.com/tomitahisaki"
  },
  summary: {
    title: "Summary",
    content: "I develop web applications mainly using Ruby on Rails.\nI also have experience in frontend development using Vue.js, React, and TypeScript.\nI'm looking to further develop my frontend skills and am interested in UI/UX.\nI have experience in system development for logistics DX, e-commerce, and education sectors, with a focus on user experience-centered application development."
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Programming Languages",
        items: ["Ruby", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
      },
      {
        name: "Frameworks & Libraries",
        items: ["Ruby on Rails", "React", "Vue.js", "Next.js", "Remix"]
      },
      {
        name: "Databases",
        items: ["MySQL", "PostgreSQL", "Redis"]
      },
      {
        name: "Infrastructure & Tools",
        items: ["AWS", "Docker", "Git", "GitHub", "Heroku"]
      },
      {
        name: "Others",
        items: ["Shopify", "Backlog", "Notion", "Slack", "Gather"]
      }
    ]
  },
  experience: {
    title: "Work Experience",
    list: [
      {
        position: "Full Stack Developer",
        company: "WYRD Inc.",
        period: "June 2023 - Present",
        location: "Tokyo, Japan",
        responsibilities: [
          "Backend development for SaaS (Logistics DX) applications using Ruby on Rails",
          "Frontend development using Vue.js to build user interfaces",
          "Large-scale refactoring of education site from CakePHP to React & Rails",
          "API integration design and implementation with core systems",
          "E-commerce site operation, maintenance, and extension app development"
        ]
      },
      {
        position: "Programming Student",
        company: "RUNTEQ",
        period: "August 2022 - May 2023",
        location: "Online",
        responsibilities: [
          "Learning web application development using Ruby on Rails",
          "Acquiring Git workflow skills in team development",
          "Practicing infrastructure construction and deployment using AWS",
          "Planning, developing, and operating portfolio applications"
        ]
      }
    ]
  },
  projects: {
    title: "Projects",
    list: [
      {
        name: "Logistics DX Platform",
        period: "January 2024 - Present",
        technologies: ["Ruby on Rails", "Vue.js", "MySQL", "AWS"],
        description: "Development of a SaaS platform supporting digital transformation in the logistics industry. Provides delivery management, inventory management, and analytics functions.",
        achievements: [
          "Improved processing speed by 30% through backend API design and implementation",
          "Built responsive frontend using Vue.js",
          "Implemented real-time delivery tracking functionality"
        ]
      },
      {
        name: "Educational Platform Renovation",
        period: "June 2023 - October 2023",
        technologies: ["React", "Ruby on Rails", "PostgreSQL"],
        description: "Migrated existing CakePHP-based education site to modern technology stack. Achieved significant improvements in usability and performance.",
        achievements: [
          "Complete frontend renewal improved UX",
          "Achieved loose coupling between frontend and backend through API design",
          "Established stable API integration with core systems"
        ]
      },
      {
        name: "Portfolio Web Application",
        period: "August 2022 - May 2023",
        technologies: ["Ruby on Rails", "MySQL", "AWS S3", "Heroku"],
        description: "Web application created as personal development. Developed using all technologies learned during RUNTEQ studies.",
        achievements: [
          "Implemented user authentication and authorization",
          "Image upload functionality (AWS S3 integration)",
          "Responsive design implementation"
        ]
      }
    ]
  },
  education: {
    title: "Education & Certifications",
    degrees: [
      {
        degree: "Bachelor of Science and Technology, Information Engineering",
        institution: "Meijo University",
        period: "April 2010 - March 2014",
        location: "Aichi, Japan"
      }
    ],
    certifications: [
      {
        name: "Ruby Certified Programmer Gold",
        issuer: "Ruby Association",
        date: "2023"
      },
      {
        name: "Fundamental Information Technology Engineer (FE)",
        issuer: "IPA Information-technology Promotion Agency",
        date: "2022"
      },
      {
        name: "Applied Information Technology Engineer (AP)",
        issuer: "IPA Information-technology Promotion Agency",
        date: "2023"
      }
    ]
  },
  publications: {
    title: "Publications & Presentations",
    list: [
      {
        title: "Best Practices for API Design in Ruby on Rails",
        type: "Technical Blog",
        date: "March 2024",
        url: "https://example.com/article1",
        description: "Explaining practical API design from RESTful API design principles to implementation methods in Rails API mode and versioning strategies."
      },
      {
        title: "State Management with Vue.js 3 Composition API",
        type: "Technical Article",
        date: "January 2024",
        url: "https://example.com/article2",
        description: "Introducing efficient state management techniques using Vue.js 3 Composition API based on experience from actual projects."
      },
      {
        title: "Performance Optimization in Modern Frontend Development",
        type: "Internal Study Session",
        date: "December 2023",
        description: "Presented on performance improvement techniques for React and Vue.js applications, covering from bundle size optimization to rendering optimization."
      }
    ]
  }
};
