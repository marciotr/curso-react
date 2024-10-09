import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/main/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
