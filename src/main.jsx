import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProjectRoutes from './ProjectRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectRoutes />
  </StrictMode>,
)
