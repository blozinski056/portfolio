import React from "react"
import "./intro.css"

export default function Intro() {

  return (
    <section className="intro-container">
      <div className="intro">
        <h1 className="intro-hi">Hi,&nbsp;</h1>
        <h1 className="intro-im">I'm&nbsp;</h1>
        <h1 className="intro-bryce" style={{color: "rgb(0, 223, 0)"}}>Bryce</h1>
        <h4 className="intro-title">FRONT-END DEVELOPER</h4>
      </div>
    </section>
  )
}