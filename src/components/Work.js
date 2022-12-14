import React from "react";

export default function Work() {
  function open(url) {
    window.open(url, "_blank");
  }

  window.addEventListener("scroll", revealWork);

  function revealWork() {
    const projects = document.querySelectorAll(".project");
    const travelDist1 = 0.4 * window.innerHeight;
    const travelDist2 = 0.3 * window.innerHeight;

    for (let i = 0; i < projects.length; i++) {
      const top = projects[i].getBoundingClientRect().top;
      const bottom = projects[i].getBoundingClientRect().bottom;
      const percentTop = (0.9 * window.innerHeight - top) / travelDist1;
      const percentBottom = (0.4 * window.innerHeight - bottom) / travelDist2;

      // top below 0.9
      if (top > 0.9 * window.innerHeight) {
        projects[i].style.transform = "rotateX(-45deg) translateY(-5vh)";
        projects[i].style.opacity = "0";
      }
      // top above 0.9 and top below 0.5
      else if (
        top <= 0.9 * window.innerHeight &&
        top >= 0.5 * window.innerHeight
      ) {
        projects[
          i
        ].style.transform = `rotateX(calc(-45deg + 45deg * ${percentTop})) translateY(calc(-5vh + 5vh * ${percentTop}))`;
        projects[i].style.opacity = `${percentTop}`;
      }
      // top above 0.5 and bottom below 0.4
      else if (
        top < 0.5 * window.innerHeight &&
        bottom > 0.4 * window.innerHeight
      ) {
        projects[i].style.transform = "none";
        projects[i].style.opacity = "1";
      }
      // bottom above 0.4 and bottom below 0.1
      else if (
        bottom <= 0.4 * window.innerHeight &&
        bottom >= 0.1 * window.innerHeight
      ) {
        projects[
          i
        ].style.transform = `rotateX(calc(45deg * ${percentBottom})) translateY(calc(5vh * ${percentBottom}))`;
        projects[i].style.opacity = `calc(1 - ${percentBottom})`;
      }
      // bottom above 0.1
      else if (bottom < 0.1 * window.innerHeight) {
        projects[i].style.transform = "rotateX(45deg) translateY(5vh)";
        projects[i].style.opacity = "0";
      }
    }
  }

  return (
    <section className="work">
      <div className="project 3">
        <div className="project-overlay 3">
          <button
            className="link"
            onClick={() => open("https://remindme-bloz.com")}
          >
            RemindMe
          </button>
        </div>
        <div className="project-tile">
          <video
            className="video-player"
            id="vid3"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              className="video-player-source"
              src="./videos/reminder-app.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="project 1">
        <div className="project-overlay 1">
          <button
            className="link"
            onClick={() =>
              open("https://github.com/blozinski056/anime-ecommerce")
            }
          >
            WeebSite
          </button>
        </div>
        <div className="project-tile">
          <video
            className="video-player"
            id="vid1"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              className="video-player-source"
              src="./videos/anime-ecommerce.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="project 2">
        <div className="project-overlay 2">
          <button
            className="link"
            onClick={() => open("https://github.com/blozinski056/movie-list")}
          >
            MovieTracker
          </button>
        </div>
        <div className="project-tile">
          <video
            className="video-player"
            id="vid2"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              className="video-player-source"
              src="./videos/movie-list.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
