import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Rutas from './Routes/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Rutas />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
