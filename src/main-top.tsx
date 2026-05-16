import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TopPage } from './pages/TopPage'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopPage />
  </StrictMode>,
)
