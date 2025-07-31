import React from 'react';

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
        className={`bg-transparent border border-gray-300 px-3 py-1.5 ml-2 rounded cursor-pointer text-sm transition-all duration-200 ease-in-out hover:bg-gray-100 ${
          currentLanguage === 'ja' ? 'bg-blue-500 text-white border-blue-500' : ''
        }`}
        onClick={() => onLanguageChange('ja')}
      >
        日本語
      </button>
      <button
        className={`bg-transparent border border-gray-300 px-3 py-1.5 ml-2 rounded cursor-pointer text-sm transition-all duration-200 ease-in-out hover:bg-gray-100 ${
          currentLanguage === 'en' ? 'bg-blue-500 text-white border-blue-500' : ''
        }`}
        onClick={() => onLanguageChange('en')}
      >
        English
      </button>
    </div>
  );
};
