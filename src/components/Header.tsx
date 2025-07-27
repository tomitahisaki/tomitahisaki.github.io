import React from 'react';
import { ResumeData } from '../types/resume';
import { LinkedInIcon, GitHubIcon } from './Icons';

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
        <div style={styles.socialLinks}>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <LinkedInIcon className="linkedin-icon" />
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <GitHubIcon className="github-icon" />
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
    display: 'flex',
    alignItems: 'center',
    gap: '2em',
    flexWrap: 'wrap' as const,
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
  socialLinks: {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
};
