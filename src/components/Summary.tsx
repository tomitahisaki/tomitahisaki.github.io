import React from 'react';
import { ResumeData } from '../types/resume';

interface SummaryProps {
  data: ResumeData['summary'];
}

export const Summary: React.FC<SummaryProps> = ({ data }) => {
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className="m-1">
      <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
      <div className='m-2'>
        <p className="text-sm leading-relaxed text-gray-600">
          {formatContent(data.content)}
        </p>
      </div>
    </section>
  );
};
