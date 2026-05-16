import React from 'react';
import { Link } from 'react-router-dom';
import { PdfButton } from './PdfButton';
import { LanguageToggle } from './LanguageToggle';

interface TopControlsProps {
  currentLanguage: 'ja' | 'en';
  onLanguageChange: (language: 'ja' | 'en') => void;
  onPrint: () => void;
}

export const TopControls: React.FC<TopControlsProps> = ({
  currentLanguage,
  onLanguageChange,
  onPrint,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 underline underline-offset-4 decoration-1 hover:decoration-2 transition-all text-sm"
      >
        ← Top
      </Link>
      <div className="flex gap-3 items-center">
        <PdfButton
          onClick={onPrint}
        />
        <LanguageToggle
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </div>
  );
};
