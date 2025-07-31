import React from 'react';
import { ResumeData } from '../types/resume';
import { LinkedInIcon, GitHubIcon, EmailIcon } from './Icons';

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
      <div className="flex items-center max-md:w-full max-md:justify-center">
        <div className="flex gap-4 items-center">
          <a href={`mailto:${data.email}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-200 transition-all duration-300 ease-in-out no-underline hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-md" title="Email">
            <EmailIcon className="email-icon" />
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-200 transition-all duration-300 ease-in-out no-underline hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-md" title="LinkedIn">
            <LinkedInIcon className="linkedin-icon" />
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 border border-gray-200 transition-all duration-300 ease-in-out no-underline hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-md" title="GitHub">
            <GitHubIcon className="github-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};
