import React from 'react';
import { ResumeData } from '../../types/resume';

interface PublicationsProps {
  data: ResumeData['publications'];
}

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.categories.map((category, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              {category.url ? (
                <a href={category.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">
                  {category.name}
                </a>
              ) : (
                category.name
              )}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-600 text-sm leading-6">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
