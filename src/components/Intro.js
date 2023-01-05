import React from "react";

export default function Intro() {
  function contact() {
    const c = document.querySelector(".contact").getBoundingClientRect().top;
    window.scrollTo({ top: c, behavior: "smooth" });
  }

  function openResume() {
    window.open("/Bryce Lozinski Resume.pdf", "_blank");
  }

  return (
    <section className="intro">
      <ul>
        <li>B</li>
        <li>r</li>
        <li>y</li>
        <li>c</li>
        <li>e</li>
        <li>&nbsp;</li>
        <li>L</li>
        <li>o</li>
        <li>z</li>
        <li>i</li>
        <li>n</li>
        <li>s</li>
        <li>k</li>
        <li>i</li>
      </ul>
      <h5>FULL-STACK ENGINEER</h5>

      <div className="intro-buttons-container">
        <button className="intro-resume" onClick={openResume}>
          RESUME
        </button>
        <button className="intro-contact" onClick={contact}>
          CONTACT
        </button>
      </div>
    </section>
  );
}
