import React from 'react';
import { ResumeData } from '../types/resume';

interface EducationProps {
  data: ResumeData['education'];
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.content}>
        {data.categories.map((category, index) => (
          <div key={index} style={styles.educationCategory}>
            <h3 style={styles.categoryTitle}>{category.name}</h3>
            <ul style={styles.educationList}>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} style={styles.educationItem}>
                  <span style={styles.bullet}>•</span>
                  {item}
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
    marginTop: '1em',
  },
  sectionTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    margin: '0.5em',
  },
  educationCategory: {
  },
  categoryTitle: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginBottom: '0.8em',
    color: '#333',
  },
  educationList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  educationItem: {
    marginBottom: '0.5em',
    paddingLeft: '1em',
    position: 'relative' as const,
    color: '#666',
    fontSize: '0.95em',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5em',
  },
  bullet: {
    color: '#0066cc',
    fontWeight: 'bold',
    marginTop: '0.1em',
    flexShrink: 0,
  },
};
