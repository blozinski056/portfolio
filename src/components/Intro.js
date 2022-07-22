import React from "react"

export default function Main() {
  window.onload = function() {
    let hand = document.querySelector('.intro-emoji');
    console.log(hand);
  }

  return (
    <section className="intro-container">
      <div className="intro">
        <h1 className="intro-hi">Hi,&nbsp;</h1>
        <h1 className="intro-im">I'm&nbsp;</h1>
        <h1 className="intro-bryce" style={{color: "rgb(0, 223, 0)"}}>Bryce</h1>
        <h1 className="intro-emoji">👋</h1>
      </div>
    </section>
  )
}