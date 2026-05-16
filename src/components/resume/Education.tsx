import React from 'react';
import { ResumeData } from '../../types/resume';

interface EducationProps {
  data: ResumeData['education'];
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.categories.map((category, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-3">{category.name}</h3>
            <ul className="list-disc ml-5 space-y-1">
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
