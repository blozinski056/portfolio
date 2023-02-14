import React from "react";

export default function About() {
  window.addEventListener("scroll", revealAbout);

  function revealAbout() {
    const aboutContainer = document.querySelector(".about_container");
    const aboutTop = aboutContainer.getBoundingClientRect().top;
    const threshold = window.innerHeight * 0.8;

    if (aboutTop <= threshold) {
      aboutContainer.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 1000,
          easing: "ease-in",
          fill: "forwards",
        }
      );
      window.removeEventListener("scroll", revealAbout);
    }
  }

  return (
    <section className="about">
      <h1>About</h1>
      <div className="about_container">
        <div className="img_container">
          <img src="/images/profile-picture.JPG" alt="" />
        </div>
        <div className="info_container">
          <p>
            Hi, I'm <span>Bryce</span>!
          </p>
          <p>
            I am a self-taught front-end engineer with back-end experience and a
            little bit of an ultimate frisbee addiction.
          </p>
          <p>
            In my free time I love to play board games, play video games, grow
            plants, mix drinks, check out new breweries, and be outside at the
            beach or in the mountains!
          </p>
          <div className="skills_container">
            <img src="/images/react.png" alt="" />
            <img src="/images/nextjs-dark.png" alt="" />
            <img src="/images/node-js.png" alt="" />
            <img src="/images/express-color.png" alt="" />
            <img src="/images/postgresql.png" alt="" />
            <img src="/images/typescript.png" alt="" />
            <img src="/images/sass-color.png" alt="" />
            <img src="/images/js-color.png" alt="" />
            <img src="/images/html5-color.png" alt="" />
            <img src="/images/css3-color.png" alt="" />
            <img src="/images/git-color.png" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="about-container">
        <h4 className="about-text">
          I'm <span style={{ color: "rgb(0, 167, 130)" }}>Bryce</span>,
          <br />a resourceful, self-taught frontend developer,
          <br />
          continuing to learn and expand on my{" "}
          <span style={{ color: "rgb(0, 167, 130)" }}>tech stack.</span>
        </h4>

        <div className="skills-container">
          <img src="/images/react-color.png" alt="" />
          <img src="/images/typescript.png" alt="" />
          <img src="/images/node-js.png" alt="" />
          <img src="/images/express-color.png" alt="" />
          <img src="/images/postgresql.png" alt="" />
          <img src="/images/sass-color.png" alt="" />
          <img src="/images/js-color.png" alt="" />
          <img src="/images/html5-color.png" alt="" />
          <img src="/images/css3-color.png" alt="" />
          <img src="/images/git-color.png" alt="" />
        </div>
      </div> */}
    </section>
  );
}
