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
        <div style={styles.nameTitle} className="name-title-mobile">
          <h1 style={styles.name}>{data.name}</h1>
          <p style={styles.title}>{data.title}</p>
        </div>
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
  nameTitle: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '1em',
    flexWrap: 'wrap' as const,
  },
  name: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
  },
  title: {
    fontSize: '1.1em',
    fontWeight: '400',
    margin: '0',
    color: '#777',
    lineHeight: 1.3,
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
