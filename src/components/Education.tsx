import React from 'react';
import { ResumeData } from '../types/resume';

interface EducationProps {
  data: ResumeData['education'];
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      
      {data.degrees.length > 0 && (
        <div style={styles.subsection}>
          <h3 style={styles.subsectionTitle}>学歴</h3>
          <div style={styles.degreesList}>
            {data.degrees.map((degree, index) => (
              <div key={index} style={styles.degreeItem}>
                <div style={styles.degreeHeader}>
                  <div style={styles.degreeInfo}>
                    <h4 style={styles.degreeTitle}>{degree.degree}</h4>
                    <h5 style={styles.institution}>{degree.institution}</h5>
                  </div>
                  <div style={styles.degreeMeta}>
                    <span style={styles.period}>{degree.period}</span>
                    <span style={styles.location}>{degree.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.certifications.length > 0 && (
        <div style={styles.subsection}>
          <h3 style={styles.subsectionTitle}>資格・認定</h3>
          <div style={styles.certificationsList}>
            {data.certifications.map((cert, index) => (
              <div key={index} style={styles.certificationItem}>
                <div style={styles.certificationHeader}>
                  <div style={styles.certificationInfo}>
                    <h4 style={styles.certificationName}>{cert.name}</h4>
                    <span style={styles.issuer}>{cert.issuer}</span>
                  </div>
                  <span style={styles.certificationDate}>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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
  subsection: {
    marginBottom: '2em',
    marginLeft: '0.5em',
  },
  subsectionTitle: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    marginBottom: '1em',
    color: '#444',
  },
  degreesList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1em',
  },
  degreeItem: {
    paddingBottom: '1em',
    borderBottom: '0.05em solid #e0e0e0',
  },
  degreeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  degreeInfo: {
    flex: '1',
  },
  degreeTitle: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    margin: '0 0 0.3em 0',
    color: '#333',
  },
  institution: {
    fontSize: '1em',
    fontWeight: '600',
    margin: '0',
    color: '#0066cc',
  },
  degreeMeta: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    gap: '0.2em',
  },
  period: {
    fontSize: '0.9em',
    fontWeight: 'bold',
    color: '#666',
  },
  location: {
    fontSize: '0.8em',
    color: '#888',
  },
  certificationsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.8em',
  },
  certificationItem: {
    padding: '0.8em',
    backgroundColor: '#f8f9fa',
    borderRadius: '0.3em',
    border: '0.05em solid #e0e0e0',
  },
  certificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  certificationInfo: {
    flex: '1',
  },
  certificationName: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    margin: '0 0 0.2em 0',
    color: '#333',
  },
  issuer: {
    fontSize: '0.9em',
    color: '#666',
  },
  certificationDate: {
    fontSize: '0.9em',
    fontWeight: 'bold',
    color: '#0066cc',
  },
};
