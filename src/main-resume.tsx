import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ResumePage } from './pages/ResumePage'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResumePage />
  </StrictMode>,
)
