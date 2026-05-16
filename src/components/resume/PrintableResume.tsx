import React from 'react';
import { Summary } from './Summary';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Education } from './Education';
import { Publications } from './Publications';
import { ResumeData } from '../../types/resume';

interface PrintableResumeProps {
  data: ResumeData;
}

export const PrintableResume: React.FC<PrintableResumeProps> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8">
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          body {
            font-size: 8pt;
            line-height: 1.2;
          }
          h1 { font-size: 16pt; margin-bottom: 3pt; }
          h2 { font-size: 12pt; margin-bottom: 4pt; margin-top: 6pt; }
          h3 { font-size: 10pt; margin-bottom: 3pt; }
          h4 { font-size: 8.5pt; margin-bottom: 2pt; }
          p, li { font-size: 8pt; line-height: 1.2; }
          
          /* 2カラムレイアウトを印刷時も有効に */
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          
          /* 余白調整 */
          .mb-6 { margin-bottom: 8pt !important; }
          .mb-4 { margin-bottom: 5pt !important; }
          .mb-3 { margin-bottom: 4pt !important; }
          .mb-2 { margin-bottom: 3pt !important; }
          .mb-1 { margin-bottom: 2pt !important; }
          .p-5 { padding: 6pt !important; }
          .p-8 { padding: 0 !important; }
          .gap-6 { gap: 8pt !important; }
          .gap-4 { gap: 5pt !important; }
          .gap-2 { gap: 3pt !important; }
          .space-y-4 > * + * { margin-top: 5pt !important; }
          .space-y-2 > * + * { margin-top: 2pt !important; }
          .space-y-1 > * + * { margin-top: 1pt !important; }
          
          /* タグサイズ調整 */
          .px-2\\.5 { padding-left: 4pt !important; padding-right: 4pt !important; }
          .py-1 { padding-top: 1pt !important; padding-bottom: 1pt !important; }
          
          /* 改ページ制御 */
          .avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          
          /* シャドウ削除 */
          .shadow-lg, .shadow-md, .shadow-sm { box-shadow: none !important; }
          
          /* 角丸を少し控えめに */
          .rounded-lg { border-radius: 3pt !important; }
          .rounded-md { border-radius: 2pt !important; }
        }
      `}</style>
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{data.header.name}</h1>
        <p className="text-gray-700 text-sm">{data.header.title}</p>
        <p className="text-gray-600 text-xs mt-1">
          {data.header.email} | {data.header.github}
        </p>
      </div>

      {/* 画面表示用と同じコンポーネントを使用 */}
      <div className="avoid-break">
        <Summary data={data.summary} />
      </div>
      
      <div className="avoid-break">
        <Skills data={data.skills} />
      </div>
      
      <div className="avoid-break">
        <Projects data={data.projects} />
      </div>
      
      <div className="avoid-break">
        <Education data={data.education} />
      </div>
      
      <div className="avoid-break">
        <Publications data={data.publications} />
      </div>
    </div>
  );
};
