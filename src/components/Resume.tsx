import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { TopControls } from './TopControls';
import { PrintableResume } from './PrintableResume';
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
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: currentLanguage === 'ja' ? '履歴書 - 冨田久樹' : 'Resume - Hisaki Tomita',
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <TopControls
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        onPrint={handlePrint}
      />
      
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

      {/* Hidden printable version */}
      <div style={{ display: 'none' }}>
        <div ref={printRef}>
          <PrintableResume data={data} />
        </div>
      </div>
    </div>
  );
};
