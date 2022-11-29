import React from "react"

export default function Intro() {
  function contact() {
    const c = document.querySelector(".contact").getBoundingClientRect().top;
    window.scrollTo({top: c, behavior: "smooth"})
  }

  function openResume() {
    window.open("./Bryce Lozinski 2022 Resume.pdf", "_blank");
  }

  return (
    <section className="intro">
      <h1>Bryce Lozinski</h1>
      <h5>FRONT-END DEVELOPER</h5>
      {/* <div className="intro-container">
        <h1 className="intro-hi">Hi,&nbsp;</h1>
        <h1 className="intro-im">I'm&nbsp;</h1>
        <h1 className="intro-bryce" style={{color: "rgb(0, 223, 0)"}}>Bryce</h1>
        <h4 className="intro-title">FRONT-END DEVELOPER</h4>
      </div> */}

      <div className="intro-buttons-container">
        <button className="intro-resume" onClick={openResume}>
          RESUME
        </button>
        <button className="intro-contact" onClick={contact}>
          CONTACT
        </button>
      </div>
        
    </section>
  )
}