import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import "@fontsource/fira-sans"; // Defaults to 400 weight
import Contact from './components/Contact'
import Skills from './components/Skills'



function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App