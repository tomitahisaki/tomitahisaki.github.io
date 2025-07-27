import React from 'react';
import { ResumeData } from '../types/resume';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './Icons';

interface HeaderProps {
  data: ResumeData['header'];
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header style={styles.header} className="header-mobile-responsive">
      <div style={styles.leftSection} className="left-section">
        <h1 style={styles.name}>{data.name}</h1>
        <h2 style={styles.title}>{data.title}</h2>
      </div>
      <div style={styles.rightSection} className="right-section">
        <div style={styles.iconLinks}>
          <a href={`mailto:${data.email}`} className="social-link" title="Email">
            <EmailIcon className="email-icon" />
          </a>
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '1.5em',
  },
  leftSection: {
    flex: 1,
    minWidth: '15em',
  },
  name: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    margin: '0 0 0.3em 0',
    color: '#333',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: '300',
    margin: '0',
    color: '#666',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  iconLinks: {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
};
