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
  },
  sectionTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
  },
  projectsList: {
    margin: '0.5em',
  },
  projectItem: {
    marginTop: '1em'
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  projectTitle: {
    flex: '1',
  },
  projectName: {
    fontSize: '1.1em',
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
