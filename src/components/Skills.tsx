import React from 'react';
import { ResumeData } from '../types/resume';

interface SkillsProps {
  data: ResumeData['skills'];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section className="m-1">
      <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
      <div className="m-2">
        {data.categories.map((category, index) => (
          <div key={index} className="mb-1">
            <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
            <ul className="list-disc p-0 m-0 ml-5">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-600 text-sm leading-6">
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
