import React from "react"
import './App.css'
import Navbar from "./components/Navbar/Navbar.js"
import Intro from "./components/Intro/Intro.js"
import About from "./components/About/About.js"
import Work from "./components/Work/Work.js"
import Contact from "./components/Contact/Contact.js"

export default function App() {

  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  )
}