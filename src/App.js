import React from "react"
import './App.css'
import Navbar from "./components/Navbar.js"
import Intro from "./components/Intro.js"
import Work from "./components/Work.js"
import Contact from "./components/Contact.js"

export default function App() {

  window.addEventListener('scroll', reveal);

  // Adds 'active' to the className when the top of the element is <80% from the top of the viewport
  function reveal() {
    let allRevs = document.querySelectorAll(".reveal");

    for(let i = 0; i < allRevs.length; i++) {
      // height of window viewport
      let windowHeight = window.innerHeight;
      // element's distance from top of viewport
      let revealTop = allRevs[i].getBoundingClientRect().top;

      if(allRevs[i].classList.contains("project-video")) {
        revealTop = allRevs[i].getBoundingClientRect().bottom;
      }

      if(revealTop < windowHeight * 0.8) {
        allRevs[i].classList.add('active');
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
      <Work />
      <Contact />
    </div>
  )
}