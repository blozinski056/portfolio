import React from "react";

export default function Work() {
  function open(url) {
    window.open(url, "_blank");
  }

  window.addEventListener("scroll", showWork);

  function showWork() {
    const workContainer = document.querySelector(".work_container");
    const containerTop = workContainer.getBoundingClientRect().top;
    const threshold = window.innerHeight * 0.8;

    if (containerTop <= threshold) {
      workContainer.animate(
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

      window.removeEventListener("scroll", showWork);
    }
  }

  return (
    <section className="work">
      <h1>Projects</h1>
      <div className="work_container">
        <div className="work_tile">
          <h3>got coffee?</h3>
          <p>
            "got coffee?" is coffee shop website! This was my first project
            using Next.js and its pages folder to generate unique URL pages.
          </p>
          <div className="work_chips">
            <div>Next.js</div>
            <div>React.js</div>
            <div>Typescript</div>
            <div>SCSS</div>
          </div>
          <div className="work_buttons">
            <button
              className="work_github"
              onClick={() =>
                open("https://github.com/blozinski056/got-coffee-next")
              }
            >
              <img src="/images/github-link-black.png" alt="" />
            </button>
            <button
              className="work_link"
              onClick={() => open("https://gotcoffeeshop.com/")}
            >
              Live Website
            </button>
          </div>
        </div>
        <div className="work_tile">
          <h3>Order 8</h3>
          <p>
            "Order 8" is a puzzle game! This was my first implementation of
            Typescript. This game requires the user to order 8 tiles in a 3x3
            grid as quickly as possible.
          </p>
          <div className="work_chips">
            <div>React.js</div>
            <div>Typescript</div>
            <div>SCSS</div>
          </div>
          <div className="work_buttons">
            <button
              className="work_github"
              onClick={() =>
                open("https://github.com/blozinski056/number-game")
              }
            >
              <img src="/images/github-link-black.png" alt="" />
            </button>
            <button
              className="work_link"
              onClick={() => open("https://order8game.com/")}
            >
              Live Website
            </button>
          </div>
        </div>
        <div className="work_tile">
          <h3>RemindMe</h3>
          <p>
            "RemindMe" is a full-stack CRUD website! It implements user
            authentication and manages user data from a database.
          </p>
          <div className="work_chips">
            <div>React.js</div>
            <div>Node.js</div>
            <div>Express.js</div>
            <div>PostgreSQL</div>
            <div>SCSS</div>
          </div>
          <div className="work_buttons">
            <button
              className="work_github"
              onClick={() =>
                open("https://github.com/blozinski056/reminder-app")
              }
            >
              <img src="/images/github-link-black.png" alt="" />
            </button>
            <button
              className="work_link"
              onClick={() => open("https://www.remindmenotes.com/")}
            >
              Live Website
            </button>
          </div>
        </div>
        <div className="work_tile">
          <h3>MovieTracker</h3>
          <p>
            "MovieTracker" is a website that accesses data from an external API!
            This website implements user authentication, and it tracks movies
            the user has watched and movies the user has not watched.
          </p>
          <div className="work_chips">
            <div>React.js</div>
            <div>Node.js</div>
            <div>Express.js</div>
            <div>PostgreSQL</div>
            <div>SCSS</div>
          </div>
          <div className="work_buttons">
            <button
              className="work_github"
              onClick={() => open("https://github.com/blozinski056/movie-list")}
            >
              <img src="/images/github-link-black.png" alt="" />
            </button>
            <button
              className="work_link"
              onClick={() => open("https://www.movietrackerlist.com/")}
            >
              Live Website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
