import React from 'react';
import { ResumeData, SkillItem } from '../types/resume';

interface SkillsProps {
  data: ResumeData['skills'];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const isSkillItem = (item: string | SkillItem): item is SkillItem => {
    return typeof item === 'object' && 'title' in item;
  };

  const renderTechStack = (items: (string | SkillItem)[]) => {
    return items.map((item, index) => {
      if (typeof item === 'string') {
        const parts = item.split(':');
        if (parts.length === 2) {
          const techs = parts[1].split(',').map(tech => tech.trim());
          return (
            <div key={index} className="mb-3">
              <h4 className="text-sm font-semibold text-gray-700 mb-1.5">{parts[0]}</h4>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        }
      }
      return null;
    });
  };

  return (
    <section className="mb-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.categories.map((category, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-3">{category.name}</h3>
            {category.name === '技術スタック' || category.name === 'Tech Stack' ? (
              <div>{renderTechStack(category.items)}</div>
            ) : (
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 text-sm leading-6">
                    {isSkillItem(item) ? (
                      <>
                        <span className="font-semibold text-gray-700">{item.title}</span>
                        {item.details && item.details.length > 0 && (
                          <span className="text-gray-600">: {item.details.join(' / ')}</span>
                        )}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
