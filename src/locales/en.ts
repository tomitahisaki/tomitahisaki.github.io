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
          "Backend (Rails) and frontend development (Vue, React) for SaaS (Logistics DX) applications",
          "New development and existing extensions for bulk registration/update features, existing feature enhancements, performance improvements",
          "New development of external APIs and improvements to existing APIs",
          "New development related to legal revisions"
        ]
      },
      {
        name: "E-commerce Site Maintenance & Extension | WYRD Inc. (October 2023 - Present)",
        items: [
          "E-commerce site (Shopify) operation and maintenance",
          "Slack integration, Remix custom app development (development only)"
        ]
      },
      {
        name: "Educational Platform Renovation | WYRD Inc. (June 2023 - October 2023)",
        items: [
          "Replaced education site from CakePHP to React & Rails",
          "Implementation of email and inquiry integration API with core systems",
          "CMS design and implementation"
        ]
      },
      {
        name: "Ruby on Rails Learning & Portfolio Development | RUNTEQ (August 2022 - May 2023)",
        items: [
          "Web application development using Ruby on Rails",
          "Portfolio web app development (Technologies used: Google Maps API, Scraping, etc.)"
        ]
      }
    ]
  },
  education: {
    title: "Education & Certifications",
    categories: [
      {
        name: "Education",
        items: [
          "Bachelor of Science and Technology, Information Engineering, Meijo University (April 2010 - March 2014, Aichi, Japan)"
        ]
      },
      {
        name: "Certifications",
        items: [
          "Ruby Certified Programmer Gold - Ruby Association (September 2023)",
          "Fundamental Information Technology Engineer (FE) - IPA Information-technology Promotion Agency (January 2024)",
          "Applied Information Technology Engineer (AP) - IPA Information-technology Promotion Agency (July 2024)",
          "TOEIC Listening & Reading 760 points (July 2024)"
        ]
      }
    ]
  },
  publications: {
    title: "Technical Activities & Personal Projects",
    categories: [
      {
        name: "Hisakey's Blog",
        url: "https://hisakit.hatenablog.com/",
        items: [
          {
            title: "First Steps with AST - Learning syntax trees through parser and Rubocop",
            url: "https://hisakit.hatenablog.com/entry/2025/07/07/182625"
          },
          {
            title: "How wrap_parameters Rails feature worked differently from frontend interface without knowing it",
            url: "https://hisakit.hatenablog.com/entry/2025/06/08/150641"
          }
        ]
      },
      {
        name: "Community Activities (kashiwarb)",
        url: "https://kashiwarb.connpass.com/",
        items: [
          {
            title: "Monthly study group sessions (retrospective article)",
            url: "https://hisakit.hatenablog.com/entry/2025/07/26/142523"
          }
        ]
      },
      {
        name: "Personal Development",
        items: [
          {
            title: "IoT Temperature & Humidity Management System (In Development) - Temperature and humidity management using Raspberry Pi (Python, Golang, React)",
            url: "https://github.com/tomitahisaki/device-platform"
          },
          {
            title: "Slack Blog Reminder Bot - Bot for reminding blog updates in Slack",
            url: "https://github.com/tomitahisaki/blog_slack_reminder_template"
          }
        ]
      }
    ]
  }
};
