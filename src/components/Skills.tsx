import React from 'react';
import { ResumeData } from '../types/resume';

interface SkillsProps {
  data: ResumeData['skills'];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.content}>
        {data.categories.map((category, index) => (
          <div key={index} style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>{category.name}</h3>
            <ul style={styles.skillsList}>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} style={styles.skillItem}>
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
  content: {
    marginTop: '1em',
  },
  skillCategory: {
    marginBottom: '1.5em',
  },
  categoryTitle: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginBottom: '0.8em',
    color: '#333',
    margin: '0 0 0.8em 0',
  },
  skillsList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  skillItem: {
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
