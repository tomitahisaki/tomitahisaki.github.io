import type { ResumeData } from '../types/resume';

export const enData: ResumeData = {
  header: {
    name: "Hisaki Tomita",
    title: "Web Developer",
    email: "alltimelow2011@gmail.com",
    linkedin: "https://www.linkedin.com/in/hisaki-tomita-200750287/",
    github: "https://github.com/tomitahisaki"
  },
  summary: {
    title: "Summary",
    content: "I live by the motto \"Think about what can be done rather than why it can't be done\" and strive to act positively. I'm skilled at identifying problems and thinking about solutions to resolve them, and I have continuously worked on improvements to help users (customers and employees) have better experiences.\nI have been involved in multiple products including redevelopment of membership sites for tutoring services, development of core system integration APIs, feature development for logistics industry business systems, and operation and maintenance of e-commerce sites. To minimize development setbacks, I consult with managers whenever specifications are unclear and define requirements before development to reduce waste.\nI consulted about my desire to be involved in task creation and design, and created opportunities to participate in task creation and design to ensure appropriate granularity. I strive to keep pull requests at an appropriate size so that reviewers are not burdened and can review quickly.\nTo improve my foundational technical skills, I write technical blogs and pursue certifications outside of work. I also build LAMP environments and work on projects using Raspberry Pi, continuously learning and improving my technical skills.",
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
        name: "Logistics DX SaaS Development | WYRD Inc. (January 2024 - Present)",
        items: "I am involved in developing SaaS applications for the logistics industry, implementing backend functionality using Ruby on Rails and frontend using Vue and React. Specifically, I handle new development and existing extensions for bulk registration/update features and CSV import functionality, while also working on performance improvements for existing features. Additionally, I work on new integrations with external APIs and improvements to existing API specifications, and I also handle new feature development for legal compliance requirements."
      },
      {
        name: "E-commerce Site Maintenance & Extension | WYRD Inc. (October 2023 - Present)",
        items: "I am responsible for the operation and maintenance of e-commerce sites using Shopify, handling daily maintenance tasks as well as feature extensions. Specifically, I implement Slack integrations and develop custom applications using Remix (not yet in production), contributing to improved operability and convenience."
      },
      {
        name: "Educational Platform Renovation | WYRD Inc. (June 2023 - October 2023)",
        items: "I participated in a project to replace an existing educational platform from CakePHP to React & Rails architecture. In addition to implementing integration APIs with core systems for email sending and inquiry management, I was responsible for CMS design and development, enabling flexible content management."
      },
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
