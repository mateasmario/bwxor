import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/onyx.css'
import './assets/css/main.css'
import './assets/css/item.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
