import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResumePage } from './pages/ResumePage';
import { TopPage } from './pages/TopPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<TopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
