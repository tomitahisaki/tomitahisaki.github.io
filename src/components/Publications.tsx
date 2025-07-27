import React from 'react';
import { ResumeData } from '../types/resume';

interface PublicationsProps {
  data: ResumeData['publications'];
}

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.publicationsList}>
        {data.list.map((publication, index) => (
          <div key={index} style={styles.publicationItem}>
            <div style={styles.publicationHeader}>
              <div style={styles.publicationInfo}>
                <h3 style={styles.publicationTitle}>
                  {publication.url ? (
                    <a 
                      href={publication.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.publicationLink}
                    >
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <div style={styles.publicationMeta}>
                  <span style={styles.publicationType}>{publication.type}</span>
                  <span style={styles.publicationDate}>{publication.date}</span>
                </div>
              </div>
            </div>
            <p style={styles.publicationDescription}>
              {publication.description}
            </p>
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
  publicationsList: {
    marginLeft: '0.5em',
  },
  publicationItem: {
    marginBottom: '2em',
    padding: '1.5em',
    backgroundColor: '#f8f9fa',
    borderRadius: '0.5em',
    border: '0.05em solid #e0e0e0',
  },
  publicationHeader: {
    marginBottom: '1em',
  },
  publicationInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5em',
  },
  publicationTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
  },
  publicationLink: {
    color: '#0066cc',
    textDecoration: 'none',
    borderBottom: '0.1em solid transparent',
    transition: 'border-bottom-color 0.2s ease',
  },
  publicationMeta: {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
  publicationType: {
    fontSize: '0.9em',
    padding: '0.3em 0.8em',
    backgroundColor: '#e8f4fd',
    color: '#0066cc',
    borderRadius: '1em',
    fontWeight: '500',
  },
  publicationDate: {
    fontSize: '0.9em',
    color: '#666',
    fontWeight: 'bold',
  },
  publicationDescription: {
    fontSize: '1em',
    lineHeight: '1.5',
    color: '#444',
    margin: '0',
  },
};
