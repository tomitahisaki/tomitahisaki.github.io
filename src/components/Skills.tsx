import React from 'react';
import { ResumeData, SkillItem } from '../types/resume';

interface SkillsProps {
  data: ResumeData['skills'];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const isSkillItem = (item: string | SkillItem): item is SkillItem => {
    return typeof item === 'object' && 'title' in item;
  };

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
                  {isSkillItem(item) ? (
                    <>
                      <span className="font-semibold">{item.title}</span>
                      {item.details && item.details.length > 0 && (
                        <span className="text-gray-600">： {item.details.join(' / ')}</span>
                      )}
                    </>
                  ) : (
                    item
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
