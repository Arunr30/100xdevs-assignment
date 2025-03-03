import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Previous } from './hooks/use-prev.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Previous  />
  </StrictMode>,
)
