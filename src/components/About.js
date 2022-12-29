import React from "react";

export default function About() {
  window.addEventListener("scroll", revealAbout);

  function revealAbout() {
    const aboutText = document.querySelector(".about-text");
    const skillsContainer = document.querySelector(".skills-container");
    const aboutTextTop = aboutText.getBoundingClientRect().top;
    const aboutTextBottom = aboutText.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // CALCULATIONS

    // total distance traveled for each animation
    const travelDist1 = windowHeight * 0.2;
    const travelDist2 = windowHeight * 0.1;

    // distance from 0.65 of window height
    const distFromYStart = windowHeight * 0.65 - aboutTextTop;
    // percentage of distance traveled from 0.65 to 0.45 of window height
    const distPercentage = distFromYStart / travelDist1;

    // distance from 0.1 of window height
    const distFromYStart2 = windowHeight * 0.1 - aboutTextBottom;
    // percentage of distance traveled from 0.1 to 0 of window height
    const distPercentage2 = distFromYStart2 / travelDist2;

    // 0.65 to 0.45 is animated
    // 0.45 to 0.1 is still
    // 0.1 to 0 is animated

    // ANIMATIONS

    // below 0.65 window height or above 0 window height
    if (aboutTextTop > 0.65 * windowHeight || aboutTextBottom <= 0) {
      aboutText.style.opacity = "0";
      skillsContainer.style.opacity = "0";
    }
    // above 0.65 window height and below 0.45 window height
    else if (
      aboutTextTop <= 0.65 * windowHeight &&
      aboutTextTop >= 0.45 * windowHeight
    ) {
      aboutText.style.opacity = `${distPercentage}`;
      aboutText.style.transform = `translateX(calc(-20vw + 20vw * ${distPercentage}))`;

      skillsContainer.style.opacity = `${distPercentage}`;
      skillsContainer.style.transform = `translateX(calc(20vw - 20vw * ${distPercentage}))`;
    }
    // above 0.45 window height and below 0.1 window height
    else if (
      aboutTextTop < 0.45 * windowHeight &&
      aboutTextBottom > 0.1 * windowHeight
    ) {
      aboutText.style.opacity = "1";
      skillsContainer.style.opacity = "1";

      aboutText.style.transform = "none";
      skillsContainer.style.transform = "none";
    }
    // above 0.1 window height and below 0 window height
    else if (aboutTextBottom <= 0.1 * windowHeight && aboutTextBottom > 0) {
      aboutText.style.opacity = `calc(1 - ${distPercentage2})`;
      aboutText.style.transform = `translateX(calc(20vw * ${distPercentage2}))`;

      skillsContainer.style.opacity = `calc(1 - ${distPercentage2})`;
      skillsContainer.style.transform = `translateX(calc(-20vw * ${distPercentage2}))`;
    }
  }

  return (
    <section className="about">
      <div className="about-container">
        <h4 className="about-text">
          I'm <span style={{ color: "rgb(0, 167, 130)" }}>Bryce</span>,
          <br />a resourceful, self-taught full-stack developer,
          <br />
          continuing to learn and expand on my{" "}
          <span style={{ color: "rgb(0, 167, 130)" }}>tech stack.</span>
        </h4>

        <div className="skills-container">
          <img src="/images/react-color.png" alt="" />
          <img src="/images/node-js.png" alt="" />
          <img src="/images/express-color.png" alt="" />
          <img src="/images/postgresql.png" alt="" />
          <img src="/images/sass-color.png" alt="" />
          <img src="/images/js-color.png" alt="" />
          <img src="/images/html5-color.png" alt="" />
          <img src="/images/css3-color.png" alt="" />
          <img src="/images/git-color.png" alt="" />
        </div>
      </div>
    </section>
  );
}
