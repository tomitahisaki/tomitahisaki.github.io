import React from 'react';
import { ResumeData } from '../types/resume';

interface ProjectsProps {
  data: ResumeData['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section className="mb-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{data.title}</h2>
      <div className="space-y-4">
        {data.experiences.map((exp, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5">
            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-800">
                {exp.company} | {exp.position}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
            </div>
            
            <p className="text-sm leading-relaxed text-gray-600 mb-4">{exp.overview}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">{data.labels.technologies}</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">{data.labels.responsibilities}</h4>
                <ul className="list-disc ml-5 space-y-1">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="text-sm text-gray-600 leading-5">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">{data.labels.achievements}</h4>
                <ul className="list-disc ml-5 space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-gray-600 leading-5">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
