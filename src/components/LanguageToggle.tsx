import React from 'react';
import { MdTranslate } from 'react-icons/md';

interface LanguageToggleProps {
  currentLanguage: 'ja' | 'en';
  onLanguageChange: (language: 'ja' | 'en') => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {

  return (
    <div className="text-right mb-6">
      <button
        onClick={() => onLanguageChange(currentLanguage === 'ja' ? 'en' : 'ja')}
        className="relative inline-flex items-center px-3 py-1 border rounded shadow-sm bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="toggle language"
      >
        <MdTranslate size={20} />
        <span className={`ml-1 text-xs font-semibold transition-opacity duration-200 ${
          currentLanguage === 'ja' 
            ? 'opacity-100' 
            : 'opacity-50'
        }`}>
          JP
        </span>
        <span className="mx-1 text-xs text-gray-400">|</span>
        <span className={`text-xs font-semibold transition-opacity duration-200 ${
          currentLanguage === 'en' 
            ? 'opacity-100' 
            : 'opacity-50'
        }`}>
          EN
        </span>
      </button>
    </div>
  );
};
