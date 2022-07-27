import React from "react"
import "./navbar.css"

export default function Navbar() {
  function toSection(num) {
    const value = num * (window.innerHeight);
    window.scrollTo({top: value, behavior: "smooth"})
  }

  return (
    <div className="navbar-container">
      {/*Logo in top left corner*/}
      <div className="logo-container">
        <h1 className="logo" onClick={() => toSection(0)} style={{color: "rgb(0, 223, 0)"}}>B</h1>
      </div>

      {/*Links in top right corner*/}
      <div className="nav-links-container">
        <h3 onClick={() => toSection(0)}>Home</h3>
        <h3 onClick={() => toSection(1)}>About</h3>
        <h3 onClick={() => toSection(2)}>Work</h3>
        <h3 onClick={() => toSection(3)}>Contact</h3>
      </div>
    </div>
  )
}