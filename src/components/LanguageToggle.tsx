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
        className={`inline-flex items-center justify-center px-3 py-2 shadow-sm hover:opacity-80 ${
          currentLanguage === 'en' 
            ? 'bg-blue-500 text-white' 
            : 'bg-white text-gray-700'
        }`}
        aria-label={`Switch to ${currentLanguage === 'ja' ? 'English' : 'Japanese'}`}
        title={`Switch to ${currentLanguage === 'ja' ? 'English' : 'Japanese'}`}
      >
        <MdTranslate size={20} />
      </button>
    </div>
  );
};
