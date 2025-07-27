import React from 'react';
import { ResumeData } from '../types/resume';

interface WorkExperienceProps {
  data: ResumeData['workExperience'];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <div className="job-content">
      <h2>{data.title}</h2>
      <div className="experience">
        <div className="skill-content">
          <h3>{data.skills.title}</h3>
          <div className="skill-section">
            <h4>{data.skills.programmingLanguages.title}</h4>
            <p>
              {data.skills.programmingLanguages.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < data.skills.programmingLanguages.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            
            <h4>{data.skills.frameworks.title}</h4>
            <p>
              {data.skills.frameworks.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < data.skills.frameworks.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            
            <h4>{data.skills.others.title}</h4>
            <p>
              {data.skills.others.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < data.skills.others.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
        <div className="jobs">
          <h3>{data.projects.title}</h3>
          {data.projects.list.map((project, index) => (
            <div key={index} className="job-section">
              <h4>{project.title}</h4>
              <ul>
                <li>{project.period}</li>
                <li>{project.industry}</li>
                {project.responsibilities && <li>{project.responsibilities}</li>}
              </ul>
              <p className="job-detail">
                {project.details.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < project.details.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
