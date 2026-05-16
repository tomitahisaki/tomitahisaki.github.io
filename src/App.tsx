import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResumePage } from './pages/ResumePage';
import { AboutPage } from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
