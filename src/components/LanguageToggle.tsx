import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface LanguageToggleProps {
  currentLanguage: 'ja' | 'en';
  onLanguageChange: (language: 'ja' | 'en') => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLanguage: 'ja' | 'en' | null,
  ) => {
    if (newLanguage) {
      onLanguageChange(newLanguage);
    }
  };

  return (
    <div className="text-right mb-6">
      <ToggleButtonGroup
        size="small"
        value={currentLanguage}
        exclusive
        onChange={handleChange}
        aria-label="language"
      >
        <ToggleButton value="ja" aria-label="japanese">
          日本語
        </ToggleButton>
        <ToggleButton value="en" aria-label="english">
          English
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
