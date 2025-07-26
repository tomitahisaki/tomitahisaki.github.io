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
    <div className="language-toggle">
      <button
        className={`lang-btn ${currentLanguage === 'ja' ? 'active' : ''}`}
        onClick={() => onLanguageChange('ja')}
      >
        日本語
      </button>
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        English
      </button>
    </div>
  );
};
