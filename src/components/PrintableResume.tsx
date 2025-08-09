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
    <div className="max-w-4xl mx-auto p-6 bg-white print:p-12 print:max-w-full">
      <div className="w-full">
        <section className="mb-3">
          <h1 className="text-3xl font-bold text-gray-900">{data.header.name}</h1>
        </section>
        <div className="flex flex-col">
          <Summary data={data.summary} />
          <Skills data={data.skills} />
          <Projects data={data.projects} />
          <div className="print:break-before-page print:pt-12">
            <Education data={data.education} />
          </div>
          <Publications data={data.publications} />
        </div>
      </div>
    </div>
  );
};
