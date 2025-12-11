import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contact from './Contact.jsx'
import Navbar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar />
  <Home />
  <About />
    <Experience />
    <Projects />
    <Contact />
  </StrictMode>,
)
