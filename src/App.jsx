import { useState } from 'react'
import Popup from './components/Popup/Popup'
import Navbar from './components/Navbar/Navbar'
import Landing from './sections/Landing/Landing'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'
import './App.css'
import { PopupProvider, usePopupContext } from './context/PopupContext'

function Body() {

  const {openPopup} = usePopupContext()

  return (
    <div className='mainBody'>
      <Navbar></Navbar>
      <Popup title={"Email Sent Successfully!"} isOpen={openPopup.includes("Success")} >
        Thank you for reaching out, I will respond as soon as possible!
      </Popup>
      <Landing></Landing>
      <div className='pages'>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  )
}

function App() {

  return (
    <PopupProvider>
      <Body></Body>
    </PopupProvider>
  )
}

export default App;