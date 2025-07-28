import React from 'react';
import { ResumeData } from '../types/resume';

interface ProjectsProps {
  data: ResumeData['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.projectsList}>
        {data.list.map((project, index) => (
          <div key={index} style={styles.projectItem}>
            <div style={styles.projectHeader}>
              <div style={styles.projectTitle}>
                <h3 style={styles.projectName}>{project.name}</h3>
                <div style={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div style={styles.projectMeta}>
                <span style={styles.period}>{project.period}</span>
              </div>
            </div>
            
            <p style={styles.projectDescription}>
              {project.description}
            </p>
            
            {project.achievements.length > 0 && (
              <ul style={styles.achievements}>
                {project.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} style={styles.achievementItem}>
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginBottom: '2em',
    padding: '1em',
    borderBottom: '0.2em solid #e0e0e0',
  },
  sectionTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '1em',
    color: '#333',
    margin: '0 0 1em 0',
  },
  projectsList: {
    marginTop: '1em',
  },
  projectItem: {
    marginBottom: '2em',
    paddingBottom: '1.5em',
    borderBottom: '0.05em solid #e0e0e0',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1em',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  projectTitle: {
    flex: '1',
  },
  projectName: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    margin: '0 0 0.5em 0',
    color: '#333',
  },
  projectMeta: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    gap: '0.2em',
  },
  period: {
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#666',
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.4em',
    marginBottom: '0.5em',
  },
  techTag: {
    backgroundColor: '#f0f8ff',
    color: '#0066cc',
    padding: '0.2em 0.5em',
    borderRadius: '0.8em',
    fontSize: '0.8em',
    fontWeight: '500',
    border: '0.05em solid #0066cc',
  },
  projectDescription: {
    fontSize: '1em',
    lineHeight: '1.5',
    color: '#444',
    marginBottom: '1em',
    margin: '0 0 1em 0',
  },
  achievements: {
    margin: '0',
    paddingLeft: '1.2em',
  },
  achievementItem: {
    marginBottom: '0.5em',
    lineHeight: '1.5',
    color: '#444',
  },
};
