import { useState } from 'react';
import { Resume } from './components/Resume';
import { jaData, enData } from './locales';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'ja' | 'en'>('ja');

  const currentData = currentLanguage === 'ja' ? jaData : enData;

  const handleLanguageChange = (language: 'ja' | 'en') => {
    setCurrentLanguage(language);
    // HTMLのlang属性も更新
    document.documentElement.lang = language;
    // タイトルも更新
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

export default App;
