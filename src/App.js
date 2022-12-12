import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Intro from "./components/Intro";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  // Scroll to top when refreshed
  window.onbeforeunload = function () {
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
