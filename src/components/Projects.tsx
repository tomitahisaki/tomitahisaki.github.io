import React from 'react';
import { ResumeData } from '../types/resume';

interface ProjectsProps {
  data: ResumeData['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.projectsGrid}>
        {data.list.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <div style={styles.projectHeader}>
              <h3 style={styles.projectName}>{project.name}</h3>
              <span style={styles.projectPeriod}>{project.period}</span>
            </div>
            
            <div style={styles.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            
            <p style={styles.projectDescription}>
              {project.description}
            </p>
            
            {project.achievements.length > 0 && (
              <div style={styles.achievements}>
                <h4 style={styles.achievementsTitle}>主な成果:</h4>
                <ul style={styles.achievementsList}>
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} style={styles.achievementItem}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    marginBottom: '2.5em',
    padding: '0 2em',
  },
  sectionTitle: {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '1em',
    color: '#333',
    borderBottom: '0.15em solid #0066cc',
    paddingBottom: '0.5em',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25em, 1fr))',
    gap: '1.5em',
    marginLeft: '0.5em',
  },
  projectCard: {
    border: '0.1em solid #e0e0e0',
    borderRadius: '0.5em',
    padding: '1.5em',
    backgroundColor: '#fafafa',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1em',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  projectName: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
    flex: '1',
  },
  projectPeriod: {
    fontSize: '0.9em',
    color: '#666',
    fontWeight: '500',
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.4em',
    marginBottom: '1em',
  },
  techTag: {
    backgroundColor: '#e8f4fd',
    color: '#0066cc',
    padding: '0.3em 0.6em',
    borderRadius: '0.8em',
    fontSize: '0.8em',
    fontWeight: '500',
  },
  projectDescription: {
    fontSize: '1em',
    lineHeight: '1.5',
    color: '#444',
    marginBottom: '1em',
  },
  achievements: {
    marginTop: '1em',
  },
  achievementsTitle: {
    fontSize: '1em',
    fontWeight: 'bold',
    margin: '0 0 0.5em 0',
    color: '#333',
  },
  achievementsList: {
    margin: '0',
    paddingLeft: '1.2em',
  },
  achievementItem: {
    marginBottom: '0.3em',
    fontSize: '0.9em',
    lineHeight: '1.4',
    color: '#555',
  },
};
