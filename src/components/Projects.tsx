import React from 'react';
import { ResumeData } from '../types/resume';

interface ProjectsProps {
  data: ResumeData['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section className="m-1">
      <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
      <div className="m-2">
        {data.categories.map((category, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
            <p className="text-sm leading-relaxed text-gray-600 m-1">
              {category.items.join('。')}。
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
