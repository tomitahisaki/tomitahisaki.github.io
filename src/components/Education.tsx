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
                <div style={styles.itemHeader}>
                  <div style={styles.itemTitle}>
                    <h4 style={styles.itemName}>{degree.degree}</h4>
                    <h5 style={styles.institution}>{degree.institution}</h5>
                  </div>
                  <div style={styles.itemMeta}>
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
                <div style={styles.itemHeader}>
                  <div style={styles.itemTitle}>
                    <h4 style={styles.itemName}>{cert.name}</h4>
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
  subsection: {
    marginBottom: '1.5em',
  },
  subsectionTitle: {
    fontSize: '1em',
    fontWeight: 'normal',
    marginBottom: '0.5em',
    color: '#444',
  },
  degreesList: {
    marginTop: '0.5em',
  },
  degreeItem: {
    marginBottom: '1.5em',
    paddingBottom: '1em',
  },
  certificationsList: {
    marginTop: '0.5em',
  },
  certificationItem: {
    marginBottom: '1.5em',
    paddingBottom: '1em',
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.5em',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  itemTitle: {
    flex: '1',
  },
  itemName: {
    fontSize: '1em',
    fontWeight: 'normal',
    margin: '0 0 0.3em 0',
    color: '#333',
  },
  institution: {
    fontSize: '1em',
    fontWeight: 'normal',
    margin: '0',
    color: '#0066cc',
  },
  issuer: {
    fontSize: '1em',
    color: '#666',
  },
  itemMeta: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    gap: '0.2em',
  },
  period: {
    fontSize: '1em',
    fontWeight: 'normal',
    color: '#666',
  },
  location: {
    fontSize: '1em',
    color: '#888',
  },
  certificationDate: {
    fontSize: '1em',
    fontWeight: 'normal',
    color: '#666',
  },
};
