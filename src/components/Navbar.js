import React from "react"

export default function Navbar() {

  function home() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div className="navbar">
      {/*Logo in top left corner*/}
      <div className="logo-container">
        <h1 className="logo" onClick={home}>B</h1>
        <div className="logo-box-1" onClick={home}></div>
        <div className="logo-box-2" onClick={home}></div>
      </div>
    </div>
  )
}