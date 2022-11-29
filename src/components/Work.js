import React from "react";

export default function Work() {

  function open(url) {
    window.open(url, "_blank");
  }

  return (
    <section className="work">
      {/* <h1 className="background">Projects</h1> */}
      <div className="work-container">
        <div className="project reveal">
          <h1 onClick={() => open("https://github.com/blozinski056/anime-ecommerce")}>
            WeebSite
          </h1>
          <p>
            An ecommerce website that is a hub of for mainstream anime merchandise and anime fans.
          </p>
        </div>
        <div className="project reveal">
          <h1 onClick={() => open("https://github.com/blozinski056/movie-list")}>
            MovieTracker
          </h1>
          <p>
            A movie list website utilizing The Movie Database API so that you and your friends can compare your movies and cross them off of your never-ending list.
          </p>
        </div>
        <div className="project reveal">
          <h1 onClick={() => open("https://github.com/blozinski056/reminder-app")}>
            RemindMe
          </h1>
          <p>
            A CRUD reminder website to keep you up to date with your long list of tasks.
          </p>
        </div>
        <div className="project-video reveal">
          <video className="video-player" id="vid1" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/anime-ecommerce.mp4" type="video/mp4" />
          </video>

          <video className="video-player" id="vid2" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/movie-list.mp4" type="video/mp4" />
          </video>

          <video className="video-player" id="vid3" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/reminder-app.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}