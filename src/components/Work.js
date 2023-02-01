import React from "react";

export default function Work() {
  function open(url) {
    window.open(url, "_blank");
  }

  window.addEventListener("scroll", revealWork);

  function revealWork() {
    const projects = document.querySelectorAll(".project");
    const travelDist1 = 0.3 * window.innerHeight;
    const travelDist2 = 0.1 * window.innerHeight;

    for (let i = 0; i < projects.length; i++) {
      const top = projects[i].getBoundingClientRect().top;
      const bottom = projects[i].getBoundingClientRect().bottom;
      const percentTop = (0.7 * window.innerHeight - top) / travelDist1;
      const percentBottom = (0.2 * window.innerHeight - bottom) / travelDist2;

      // top below 0.7
      if (top >= 0.7 * window.innerHeight) {
        projects[i].animate(
          {
            opacity: 0,
            transform: "translateY(10vh) scale(0.8)",
          },
          {
            duration: 1000,
            fill: "forwards",
          }
        );
      }
      // top above 0.7 and top below 0.4
      else if (
        top < 0.7 * window.innerHeight &&
        top > 0.4 * window.innerHeight
      ) {
        projects[i].animate(
          {
            opacity: `${percentTop}`,
            transform: `translateY(calc(10vh - 10vh * ${percentTop})) scale(calc(0.8 + 0.2 * ${percentTop}))`,
          },
          {
            duration: 1000,
            fill: "forwards",
          }
        );
      }
      // top above 0.4 and bottom below 0.2
      else if (
        top <= 0.4 * window.innerHeight &&
        bottom >= 0.2 * window.innerHeight
      ) {
        projects[i].animate(
          {
            opacity: 1,
            transform: "none",
          },
          {
            duration: 1000,
            fill: "forwards",
          }
        );
      }
      // bottom above 0.2 and bottom below 0
      else if (
        bottom < 0.2 * window.innerHeight &&
        bottom > 0.1 * window.innerHeight
      ) {
        projects[i].animate(
          {
            opacity: `calc(1 - ${percentBottom})`,
            transform: `translateY(calc(-10vh * ${percentBottom})) scale(calc(1 - 0.2 * ${percentBottom}))`,
          },
          {
            duration: 1000,
            fill: "forwards",
          }
        );
      }
      // bottom above 0
      else if (bottom <= 0.1 * window.innerHeight) {
        projects[i].animate(
          {
            opacity: 0,
            transform: "translateY(-10vh) scale(0.8)",
          },
          {
            duration: 1000,
            fill: "forwards",
          }
        );
      }
    }
  }

  return (
    <section className="work">
      <div className="project 3">
        <div className="project-overlay 3">
          <button
            className="link"
            onClick={() => open("https://www.remindmenotes.com/")}
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
              src="/videos/remindme.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="project 2">
        <div className="project-overlay 2">
          <button
            className="link"
            onClick={() => open("https://www.movietrackerlist.com/")}
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
              src="/videos/movietracker.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="project 1">
        <div className="project-overlay 1">
          <button
            className="link"
            onClick={() => open("https://www.einsiteecomm.com")}
          >
            EinSite
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
              src="/videos/einsite.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="project 4">
        <div className="project-overlay 4">
          <button
            className="link"
            onClick={() => open("https://www.order8game.com/")}
          >
            Order 8
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
              src="/videos/number-game.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
