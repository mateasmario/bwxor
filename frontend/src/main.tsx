import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import './assets/css/item.css'
import './assets/css/kerwei/styles.css'
import './assets/css/spy/styles.css'
import './assets/css/audioessentials/styles.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
