import React from "react"
import './App.css'
import Navbar from "./components/Navbar.js"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Work from "./components/Work.js"
import Contact from "./components/Contact.js"

export default function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

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