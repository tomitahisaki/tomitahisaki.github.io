import React from 'react';
import { ResumeData } from '../types/resume';

interface HeaderProps {
  data: ResumeData['header'];
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header style={styles.header}>
      <div style={styles.nameSection}>
        <h1 style={styles.name}>{data.name}</h1>
        <h2 style={styles.title}>{data.title}</h2>
      </div>
      <div style={styles.contactSection}>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Email:</span>
          <a href={`mailto:${data.email}`} style={styles.contactLink}>
            {data.email}
          </a>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Phone:</span>
          <span>{data.phone}</span>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>Location:</span>
          <span>{data.location}</span>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>LinkedIn:</span>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
            LinkedIn Profile
          </a>
        </div>
        <div style={styles.contactItem}>
          <span style={styles.contactLabel}>GitHub:</span>
          <a href={data.github} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
            GitHub Profile
          </a>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '2em',
    borderBottom: '0.1em solid #e0e0e0',
    marginBottom: '2em',
  },
  nameSection: {
    marginBottom: '1.5em',
  },
  name: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    margin: '0 0 0.5em 0',
    color: '#333',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: '300',
    margin: '0',
    color: '#666',
  },
  contactSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15em, 1fr))',
    gap: '0.8em',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.3em',
  },
  contactLabel: {
    fontSize: '0.9em',
    fontWeight: 'bold',
    color: '#333',
  },
  contactLink: {
    color: '#0066cc',
    textDecoration: 'none',
  },
};
