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
    marginBottom: '2em',
    padding: '1em',
  },
  sectionTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '0.2em solid',
    color: '#333',
    margin: '0 0 1em 0',
  },
  content: {
    marginTop: '1em',
  },
  summaryText: {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#666',
    margin: '0',
  },
};
