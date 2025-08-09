import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { LanguageToggle } from './LanguageToggle';
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
      <div className="flex justify-between items-start mb-6">
        <button
          onClick={handlePrint}
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white shadow-sm hover:bg-blue-600 transition-colors duration-200"
          title={currentLanguage === 'ja' ? 'PDFとして保存' : 'Save as PDF'}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {currentLanguage === 'ja' ? 'PDF保存' : 'Save PDF'}
        </button>
        <LanguageToggle
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
      
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
