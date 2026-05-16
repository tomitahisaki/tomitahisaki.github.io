import React from 'react';
import { ResumeData } from '../../types/resume';

interface HeaderProps {
  data: ResumeData['header'];
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="flex justify-between items-start flex-wrap gap-6 max-md:flex-col max-md:items-center max-md:gap-4">
      <div className="flex-1 min-w-80 max-md:min-w-full max-md:text-center">
        <div className="flex items-baseline gap-4 flex-wrap max-md:flex-col max-md:items-center max-md:gap-2">
          <h1 className="text-4xl font-bold m-0 text-gray-800 leading-tight">{data.name}</h1>
          <p className="text-lg font-normal m-0 text-gray-600 leading-snug">{data.title}</p>
        </div>
      </div>
    </header>
  );
};
