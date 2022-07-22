import React from "react"
import Logo from "../images/temp-logo.png"

export default function Navbar() {
  function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div className="navbar-container">
      {/*Logo in top left corner*/}
      <img className="logo" src={Logo} onClick={toTop}/>

      {/*Links in top right corner*/}
      <div className="nav-links-container">
        <h3>Home</h3>
        <h3>Work</h3>
        <h3>Contact</h3>
      </div>
    </div>
  )
}