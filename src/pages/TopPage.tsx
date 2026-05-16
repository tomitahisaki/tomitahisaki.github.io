import { Top } from '../components/top/Top';
import { jaTopData } from '../locales';

export function TopPage() {
  return <Top data={jaTopData} currentLanguage="ja" />;
}
