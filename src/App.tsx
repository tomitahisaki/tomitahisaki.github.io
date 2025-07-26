import { useState } from 'react';
import { Resume } from './components/Resume';
import { jaData, enData } from './data/content';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<'ja' | 'en'>('ja');

  const currentData = currentLanguage === 'ja' ? jaData : enData;

  const handleLanguageChange = (language: 'ja' | 'en') => {
    setCurrentLanguage(language);
    // HTMLのlang属性も更新
    document.documentElement.lang = language;
    // タイトルも更新
    document.title = currentData.title + (language === 'ja' ? ' 冨田久樹' : ' Hisaki Tomita');
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
