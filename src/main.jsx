import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Otp_main from './Otp_main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Otp_main/>
  </StrictMode>,
)
