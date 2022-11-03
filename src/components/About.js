import React from "react";

export default function About() {

  return (
    <section className="about">
      <h1 className="background">ABOUT</h1>
      <div className="about-container">
        <h4 className="body reveal">
          I'm <span style={{color: "rgb(0, 223, 0)"}}>Bryce Lozinski</span>,
          <br />a self-taught front-end developer
          <br />making eye-catching websites while
          <br />continuing to grow my <span style={{color: "rgb(0, 223, 0)"}}>coding skills.</span>
        </h4>

        <div className="skills-container reveal">
          <img src="./images/react-color.png" alt="" />
          <img src="./images/html5-color.png" alt="" />
          <img src="./images/js-color.png" alt="" />
          <img src="./images/css3-color.png" alt="" />
          <img src="./images/sass-color.png" alt="" />
          <img src="./images/java-color.png" alt="" />
          <img src="./images/c++-color.png" alt="" />
          <img src="./images/git-color.png" alt="" />
        </div>
      </div>
    </section>
  )
}