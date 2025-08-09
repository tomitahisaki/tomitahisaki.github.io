import React from 'react';
import { Header } from './Header';
import { Summary } from './Summary';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Education } from './Education';
import { Publications } from './Publications';
import { ResumeData } from '../types/resume';

interface PrintableResumeProps {
  data: ResumeData;
}

export const PrintableResume: React.FC<PrintableResumeProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="w-full">
        <section className="mb-2">
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