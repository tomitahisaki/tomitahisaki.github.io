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
    content: "Focused on web application development, specializing in backend development, database design, and API design. Extensive experience in business system development using Ruby on Rails, including redevelopment of membership sites for tutoring services, core system integration API development, logistics industry business system development, and e-commerce site operation and maintenance. Also experienced in frontend development using React / TypeScript, capable of full-stack development. Value the principle of \"thinking about what can be done rather than why it can't be done,\" continuously working on improvements to provide better experiences for users and operators. Actively consult and clarify unclear specifications to minimize development setbacks. Proactively involved in task breakdown and design, striving to create pull requests with appropriate granularity for easier review. Currently studying and developing design and computer science fundamentals, and outside of work, engaging in continuous learning through technical blog writing and personal projects using Raspberry Pi.",
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Strengths",
        items: [
          {
            title: "Backend Development",
            details: [
              "Business system development using Ruby on Rails",
              "API design and external system integration",
              "Batch processing development and operational maintenance"
            ]
          },
          {
            title: "Database Design & Optimization",
            details: [
              "Database design using MySQL",
              "Query optimization",
              "Performance improvements including N+1 problem resolution"
            ]
          },
          {
            title: "Maintenance & Improvement",
            details: [
              "Refactoring",
              "Maintainability improvement through separation of concerns",
              "Specification clarification and review efficiency improvement"
            ]
          },
          {
            title: "Frontend",
            details: [
              "React / Vue.js / TypeScript",
              "Full-stack development capability"
            ]
          }
        ]
      },
      {
        name: "Tech Stack",
        items: [
          "Backend: Ruby on Rails, Python, Golang",
          "Frontend: React, Vue.js, TypeScript",
          "Database: MySQL",
          "Infrastructure & Tools: Docker, GitHub, GitHub Actions, Slack, Figma",
          "Development Methodology: GitHub Flow, Agile Development, Scrum"
        ]
      }
    ]
  },
  projects: {
    title: "Work Experience",
    labels: {
      technologies: "Technologies",
      responsibilities: "Responsibilities",
      achievements: "Achievements"
    },
    experiences: [
      {
        company: "WYRD Inc.",
        position: "Web Engineer",
        period: "June 2023 - May 2026",
        overview: "Engaged in development and maintenance of multiple products including Logistics DX SaaS, educational platforms, and e-commerce site operations.",
        technologies: [
          "Ruby on Rails",
          "React",
          "Vue.js",
          "Shopify",
          "Remix",
          "MySQL",
          "Docker"
        ],
        responsibilities: [
          "Business system feature development and maintenance",
          "External API integration",
          "Performance improvement",
          "Shopify operations and feature extensions",
          "QA"
        ],
        achievements: [
          "CSV bulk registration and update feature design and development",
          "Legal compliance feature design and development",
          "Edit history feature design and development"
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
