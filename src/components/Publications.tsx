import React from 'react';
import { ResumeData } from '../types/resume';

interface PublicationsProps {
  data: ResumeData['publications'];
}

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
      <div className="m-2">
        {data.categories.map((category, index) => (
          <div key={index} className="">
            <h3 className="text-lg font-bold mb-3 text-gray-800">
              {category.url ? (
                <a href={category.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline text-lg font-bold">
                  {category.name}
                </a>
              ) : (
                category.name
              )}
            </h3>
            <ul className="list-disc p-0 m-0 ml-5">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2 text-gray-600 text-sm leading-6">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline text-sm">
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
