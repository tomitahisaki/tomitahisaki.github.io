import React from 'react';
import { ResumeData } from '../data/content';

interface ProfileProps {
  data: ResumeData['profile'];
}

export const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <div className="profile-content">
      <h2>{data.title}</h2>
      <div className="profile">
        <div className="info">
          <h3>{data.basicInfo.title}</h3>
          <ul>
            <li>{data.basicInfo.name}</li>
            <li>{data.basicInfo.age}</li>
            <li>{data.basicInfo.location}</li>
            <li>{data.basicInfo.email}</li>
            <li>{data.basicInfo.education}</li>
            <li>{data.basicInfo.certifications}</li>
          </ul>
        </div>
        <div className="pr">
          <h3>{data.selfIntroduction.title}</h3>
          <p>
            {data.selfIntroduction.content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < data.selfIntroduction.content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
