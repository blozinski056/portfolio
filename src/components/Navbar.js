import React from "react"

export default function Navbar() {
  function toSection(num) {
    const value = num * (window.innerHeight);
    window.scrollTo({top: value, behavior: "smooth"})
  }

  return (
    <div className="navbar">
      {/*Logo in top left corner*/}
      <div className="logo-container">
        <h1 className="logo" onClick={() => toSection(0)}>B</h1>
        <div className="logo-box-1" onClick={() => toSection(0)}></div>
        <div className="logo-box-2" onClick={() => toSection(0)}></div>
      </div>

      {/*Links in top right corner*/}
      <div className="nav-links-container">
        <h3 onClick={() => toSection(1)}>About</h3>
        <h3 onClick={() => toSection(2)}>Projects</h3>
        <h3 onClick={() => toSection(3)}>Contact</h3>
      </div>
    </div>
  )
}