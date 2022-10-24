import React from "react"
import './App.css'
import Navbar from "./components/Navbar.js"
import Intro from "./components/Intro.js"
import About from "./components/About.js"
import Work from "./components/Work.js"
import Contact from "./components/Contact.js"

export default function App() {

  window.addEventListener('scroll', reveal);

  function reveal() {
    let allRevs = document.querySelectorAll(".reveal");

    for(let i = 0; i < allRevs.length; i++) {
      // height of window viewport
      let windowHeight = window.innerHeight;
      // element's distance from top of viewport
      let revealTop = allRevs[i].getBoundingClientRect().top;
      let revealPoint = 250;

      if(revealTop < windowHeight - revealPoint) {
        allRevs[i].classList.add('active');
      } else {
        allRevs[i].classList.remove('active');
      }
    }
  }

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