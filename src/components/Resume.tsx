import React from 'react';
import { LanguageToggle } from './LanguageToggle';
import { Profile } from './Profile';
import { WorkExperience } from './WorkExperience';
import { ResumeData } from '../types/resume';

interface ResumeProps {
  data: ResumeData;
  currentLanguage: 'ja' | 'en';
  onLanguageChange: (language: 'ja' | 'en') => void;
}

export const Resume: React.FC<ResumeProps> = ({
  data,
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="container">
      <LanguageToggle
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
      
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      
      <Profile data={data.profile} />
      <WorkExperience data={data.workExperience} />
    </div>
  );
};
