import React from 'react';
import { ResumeData } from '../types/resume';

interface SummaryProps {
  data: ResumeData['summary'];
}

export const Summary: React.FC<SummaryProps> = ({ data }) => {
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.content}>
        <p style={styles.summaryText}>
          {formatContent(data.content)}
        </p>
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
  content: {
    marginLeft: '0.5em',
  },
  summaryText: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#444',
    margin: '0',
  },
};
