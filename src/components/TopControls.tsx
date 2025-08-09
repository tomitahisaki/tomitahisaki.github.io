import React from 'react';
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
    <div className="flex justify-end items-start mb-6 gap-3">
      <PdfButton
        onClick={onPrint}
      />
      <LanguageToggle
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
    </div>
  );
};
