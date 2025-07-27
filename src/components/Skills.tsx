import React from 'react';
import { ResumeData } from '../types/resume';

interface SkillsProps {
  data: ResumeData['skills'];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{data.title}</h2>
      <div style={styles.skillsGrid}>
        {data.categories.map((category, index) => (
          <div key={index} style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>{category.name}</h3>
            <div style={styles.skillTags}>
              {category.items.map((skill, skillIndex) => (
                <span key={skillIndex} style={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
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
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20em, 1fr))',
    gap: '1.5em',
    marginLeft: '0.5em',
  },
  skillCategory: {
    marginBottom: '1em',
  },
  categoryTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '0.8em',
    color: '#444',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5em',
  },
  skillTag: {
    backgroundColor: '#f0f8ff',
    color: '#0066cc',
    padding: '0.4em 0.8em',
    borderRadius: '1em',
    fontSize: '0.9em',
    fontWeight: '500',
    border: '0.1em solid #0066cc',
  },
};
