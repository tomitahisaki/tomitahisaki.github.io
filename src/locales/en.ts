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
  projects: {
    title: "Work Experience & Projects",
    categories: [
      {
        name: "Logistics DX SaaS Development | WYRD Inc. (June 2023 - Present)",
        items: [
          "Backend development for SaaS (Logistics DX) applications using Ruby on Rails",
          "Frontend development using Vue.js to build user interfaces",
          "Improved processing speed by 30% through backend API design and implementation",
          "Built responsive frontend using Vue.js",
          "Implemented real-time delivery tracking functionality"
        ]
      },
      {
        name: "Educational Platform Renovation | WYRD Inc. (June 2023 - October 2023)",
        items: [
          "Large-scale refactoring of education site from CakePHP to React & Rails",
          "Complete frontend renewal improved UX",
          "Achieved loose coupling between frontend and backend through API design",
          "Established stable API integration with core systems",
          "API integration design and implementation with core systems"
        ]
      },
      {
        name: "E-commerce Site Maintenance & Extension | WYRD Inc. (June 2023 - Present)",
        items: [
          "E-commerce site operation, maintenance, and extension app development",
          "Implemented new features and functionality improvements",
          "Performance optimization and bug fixes",
          "Custom app development for extended functionality"
        ]
      },
      {
        name: "Ruby on Rails Learning & Portfolio Development | RUNTEQ (August 2022 - May 2023)",
        items: [
          "Learning web application development using Ruby on Rails",
          "Acquiring Git workflow skills in team development",
          "Practicing infrastructure construction and deployment using AWS",
          "Planning, developing, and operating portfolio applications",
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
    title: "Technical Activities & Personal Projects",
    categories: [
      {
        name: "Blog Introduction",
        items: [
          "Technical Blog \"Full-Stack Developer's Notes\" - Regularly publishing articles on Ruby on Rails, Vue.js, React.js with 10K monthly page views",
          "Qiita Technical Article Publications - Published 30+ articles on Ruby on Rails and JavaScript, earning 500+ total likes"
        ]
      },
      {
        name: "Community Management",
        items: [
          "Local Programming Community \"Tech Meetup Nagoya\" Management - Monthly events with 50+ regular participants",
          "Internal Technical Study Group Planning & Management - Bi-monthly sessions improving overall team skills"
        ]
      },
      {
        name: "Personal Development",
        items: [
          "IoT Weather Observation System - Real-time weather data collection and visualization using Raspberry Pi (Python, Flask, SQLite)",
          "Expense Tracker App \"MoneyTracker\" - React Native app with receipt photography and automatic input features",
          "Task Management Tool \"TaskFlow\" - Vue.js + Rails API with drag & drop operations and team collaboration features"
        ]
      }
    ]
  }
};
