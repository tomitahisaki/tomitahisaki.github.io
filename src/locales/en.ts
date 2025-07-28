import type { ResumeData } from '../types/resume';

export const enData: ResumeData = {
  header: {
    name: "Hisaki Tomita",
    title: "Web Developer",
    email: "alltimelow2011@gmail.com",
    linkedin: "https://linkedin.com/in/hisaki-tomita",
    github: "https://github.com/tomitahisaki"
  },
  summary: {
    title: "Summary",
    content: "Contributed to the redevelopment of a tutoring service platform, migrating from CakePHP to Ruby on Rails and React.js, and built integration APIs to connect with a core business system. Improved operational efficiency by proactively identifying unclear requirements and working closely with managers to define specifications early in the development cycle. In a logistics DX project, developed and extended key features and implemented external API integrations using Rails, Vue.js, and React.js. Created well-scoped tasks and optimized pull request granularity, which led to reduced review time and smoother team collaboration. Also involved in the maintenance and improvement of an e-commerce site built with Shopify. Outside of work, strengthened technical fundamentals through blogging, obtaining certifications, and building hobby projects with Raspberry Pi.",
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Main Technologies Used in Professional Work",
        items: [
          "Languages & Frameworks: Ruby (Rails), JavaScript (React.js, Vue.js)",
          "Databases: MySQL",
          "Environment & Tools: Docker, GitHub, GitHub Actions, Slack, Figma",
          "Development Style: GitHub Flow, PR-based development, Code Review, Weekly Scrum"
        ]
      },
      {
        name: "Technologies Used in Learning & Personal Development",
        items: [
          "Python, Golang, TypeScript",
          "IoT projects with Raspberry Pi",
          "Technical blog writing, studying for certifications (Web API design, CS fundamentals, etc.)"
        ]
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
