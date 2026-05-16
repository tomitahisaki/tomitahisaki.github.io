import { useState, useEffect } from 'react';
import { Resume } from '../components/resume/Resume';
import { resumeJaData, resumeEnData } from '../locales';

export function ResumePage() {
  // localStorageから言語設定を読み込む
  const [currentLanguage, setCurrentLanguage] = useState<'ja' | 'en'>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage === 'en' ? 'en' : 'ja') as 'ja' | 'en';
  });

  const currentData = currentLanguage === 'ja' ? resumeJaData : resumeEnData;

  const handleLanguageChange = (language: 'ja' | 'en') => {
    setCurrentLanguage(language);
    localStorage.setItem('preferredLanguage', language);
    document.documentElement.lang = language;
    document.title = language === 'ja' ? '履歴書 - 冨田久樹' : 'Resume - Hisaki Tomita';
  };

  // 初回レンダリング時にタイトルと言語を設定
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.title = currentLanguage === 'ja' ? '履歴書 - 冨田久樹' : 'Resume - Hisaki Tomita';
  }, [currentLanguage]);

  return (
    <Resume
      data={currentData}
      currentLanguage={currentLanguage}
      onLanguageChange={handleLanguageChange}
    />
  );
}
