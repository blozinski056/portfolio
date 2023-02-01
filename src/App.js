import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Intro from "./components/Intro";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  // window.addEventListener("scroll", revealAbout);

  // function reveal()
  // Scroll to top when refreshed
  window.onbeforeunload = function () {
    const container = document.querySelector(".container");
    // remove all elements so that they disappear before scrolling to top
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", removeMouseArrow);

  function removeMouseArrow() {
    const mouseDiv = document.querySelector(".scroll-down");
    const elmPosition = mouseDiv.getBoundingClientRect().bottom;

    if (elmPosition < 0.75 * window.innerHeight) {
      mouseDiv.classList.add("disappear");
      window.removeEventListener("scroll", removeMouseArrow);
    }
  }

  return (
    <div className="container">
      <Logo />
      <Intro />
      <About />
      <Work />
      <Contact />
      <div className="scroll-down">
        <img src="/images/mouse-green.png" alt="" className="mouse" />
        <img src="/images/down-arrows-green.png" alt="" className="arrows" />
      </div>
    </div>
  );
}
