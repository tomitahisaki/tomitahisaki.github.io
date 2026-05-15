import { useState } from 'react';
import { About } from '../components/About';
import { jaAboutData } from '../locales/about-ja';

export function AboutPage() {
  const [currentLanguage] = useState<'ja' | 'en'>('ja');

  return (
    <About
      data={jaAboutData}
      currentLanguage={currentLanguage}
    />
  );
}
