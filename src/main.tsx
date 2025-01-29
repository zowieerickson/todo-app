import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize/modern-normalize.css'; // Import normalize first
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
