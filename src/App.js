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

  return (
    <div className="container">
      <Logo />
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
