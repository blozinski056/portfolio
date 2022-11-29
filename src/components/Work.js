import React from "react";

export default function Work() {

  function open(url) {
    window.open(url, "_blank");
  }

  return (
    <section className="work">
      <h1 className="background">Projects</h1>
      <div className="project reveal 1">
        <div className="project-tile">
          <video className="video-player" id="vid1" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/anime-ecommerce.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="project reveal 2">
        <div className="project-tile">
          <video className="video-player" id="vid2" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/movie-list.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="project reveal 3">
        <div className="project-tile">
          <video className="video-player" id="vid3" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/reminder-app.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}