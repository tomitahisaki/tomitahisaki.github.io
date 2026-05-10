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
        {data.experiences.map((exp, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-lg font-bold text-gray-800">
              {exp.company} | {exp.position}
            </h3>
            <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
            <p className="text-sm leading-relaxed text-gray-600 mb-2">{exp.overview}</p>
            
            <div className="mb-2">
              <h4 className="text-sm font-semibold text-gray-800 mb-0.5">{data.labels.technologies}</h4>
              <p className="text-sm text-gray-600">{exp.technologies.join(' / ')}</p>
            </div>

            <div className="mb-2">
              <h4 className="text-sm font-semibold text-gray-800 mb-0.5">{data.labels.responsibilities}</h4>
              <ul className="list-disc ml-5 m-0">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-sm text-gray-600 leading-5">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-1">
              <h4 className="text-sm font-semibold text-gray-800 mb-0.5">{data.labels.achievements}</h4>
              <ul className="list-disc ml-5 m-0">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-sm text-gray-600 leading-5">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
