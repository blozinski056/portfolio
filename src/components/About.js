import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h4 className="body">
          I'm <span style={{ color: "rgb(0, 167, 130)" }}>Bryce</span>,
          <br />a resourceful, self-taught full stack web developer,
          <br />
          continuing to learn and to expand on my{" "}
          <span style={{ color: "rgb(0, 167, 130)" }}>coding skills.</span>
        </h4>

        <div className="skills-container">
          <img src="./images/react-color.png" alt="" />
          <img src="./images/postgresql.png" alt="" />
          <img src="./images/node-js.png" alt="" />
          <img src="./images/sass-color.png" alt="" />
          <img src="./images/js-color.png" alt="" />
          <img src="./images/html5-color.png" alt="" />
          <img src="./images/css3-color.png" alt="" />
          <img src="./images/git-color.png" alt="" />
        </div>
      </div>
    </section>
  );
}
