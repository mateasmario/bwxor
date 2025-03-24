import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import './assets/css/project.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
