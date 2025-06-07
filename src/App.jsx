import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Landing from './sections/Landing/Landing'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'
import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <div className='pages'>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
