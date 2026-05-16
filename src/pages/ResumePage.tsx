import { useState } from 'react';
import { Resume } from '../components/resume/Resume';
import { resumeJaData, resumeEnData } from '../locales';

export function ResumePage() {
  const [currentLanguage, setCurrentLanguage] = useState<'ja' | 'en'>('ja');

  const currentData = currentLanguage === 'ja' ? resumeJaData : resumeEnData;

  const handleLanguageChange = (language: 'ja' | 'en') => {
    setCurrentLanguage(language);
    document.documentElement.lang = language;
    document.title = language === 'ja' ? '履歴書 - 冨田久樹' : 'Resume - Hisaki Tomita';
  };

  return (
    <Resume
      data={currentData}
      currentLanguage={currentLanguage}
      onLanguageChange={handleLanguageChange}
    />
  );
}
