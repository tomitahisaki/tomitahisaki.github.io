import React from 'react';
import { LanguageToggle } from './LanguageToggle';
import { Header } from './Header';
import { Summary } from './Summary';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Education } from './Education';
import { Publications } from './Publications';
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <LanguageToggle
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
      
      <div className="w-full">
        <section className="mb-4">
          <Header data={data.header} />
        </section>
        <div className="flex flex-col">
          <Summary data={data.summary} />
          <Skills data={data.skills} />
          <Projects data={data.projects} />
          <Education data={data.education} />
          <Publications data={data.publications} />
        </div>
      </div>
    </div>
  );
};
