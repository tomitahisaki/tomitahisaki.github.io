import React from 'react';
import { ResumeData } from '../types/resume';

interface ExperienceProps {
  data: ResumeData['experience'];
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.experienceList}>
        {data.list.map((job, index) => (
          <div key={index} style={styles.experienceItem}>
            <div style={styles.jobHeader}>
              <div style={styles.jobTitle}>
                <h3 style={styles.position}>{job.position}</h3>
                <h4 style={styles.company}>{job.company}</h4>
              </div>
              <div style={styles.jobMeta}>
                <span style={styles.period}>{job.period}</span>
                <span style={styles.location}>{job.location}</span>
              </div>
            </div>
            <ul style={styles.responsibilities}>
              {job.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} style={styles.responsibilityItem}>
                  {responsibility}
                </li>
              ))}
            </ul>
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
  experienceList: {
    marginLeft: '0.5em',
  },
  experienceItem: {
    marginBottom: '2em',
    paddingBottom: '1.5em',
    borderBottom: '0.05em solid #e0e0e0',
  },
  jobHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1em',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  jobTitle: {
    flex: '1',
  },
  position: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    margin: '0 0 0.3em 0',
    color: '#333',
  },
  company: {
    fontSize: '1.1em',
    fontWeight: '600',
    margin: '0',
    color: '#0066cc',
  },
  jobMeta: {
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
  location: {
    fontSize: '0.9em',
    color: '#888',
  },
  responsibilities: {
    margin: '0',
    paddingLeft: '1.2em',
  },
  responsibilityItem: {
    marginBottom: '0.5em',
    lineHeight: '1.5',
    color: '#444',
  },
};
