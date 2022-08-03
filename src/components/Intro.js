import React from "react"

export default function Intro() {

  function toSection(num) {
    const value = num * (window.innerHeight);
    window.scrollTo({top: value, behavior: "smooth"})
  }

  return (
    <section className="intro">
      <div className="intro-container">
        <h1 className="intro-hi">Hi,&nbsp;</h1>
        <h1 className="intro-im">I'm&nbsp;</h1>
        <h1 className="intro-bryce" style={{color: "rgb(0, 223, 0)"}}>Bryce</h1>
        <h4 className="intro-title">FRONT-END DEVELOPER</h4>
      </div>

      <div className="intro-buttons-container">
        <a
          href="./Bryce Lozinski 2022 Resume.pdf"
          className="intro-resume"
          target="_blank"
        >
          RESUME
        </a>
        <a
          onClick={() => toSection(3)}
          className="intro-resume"
        >
          CONTACT
        </a>
      </div>
        
    </section>
  )
}