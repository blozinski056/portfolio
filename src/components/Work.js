import React from "react";

export default function Work() {
  const [vid1, setVid1] = React.useState(true);
  const [vid2, setVid2] = React.useState(false);
  const [vid3, setVid3] = React.useState(false);

  React.useEffect(() => {
    
  }, [])

  function open(url) {
    window.open(url, "_blank");
  }

  function vid1On() {
    setVid1(true);
    setVid2(false);
    setVid3(false);
  }

  function vid2On() {
    setVid1(false);
    setVid2(true);
    setVid3(false);
  }

  function vid3On() {
    setVid1(false);
    setVid2(false);
    setVid3(true);
  }

  function isInside(bool) {
    if(bool) {
      document.querySelector(".video-player").classList.add("expand");
    } else {
      document.querySelector(".video-player").classList.remove("expand");
    }
  }

  return (
    <section className="work">
      <h1 className="background">Projects</h1>
      <div className="work-container">
        <div className="project reveal">
          <h1 
            onClick={() => open("https://github.com/blozinski056/anime-ecommerce")}
            // onMouseOver={() => changeSrc("./videos/anime-ecommerce.mp4")}
            onMouseOver={vid1On}
          >
            WeebSite
          </h1>
          <p>
            An ecommerce website for your favorite mainstream anime merchandise.
          </p>
        </div>
        <div className="project reveal">
          <h1 
            onClick={() => open("https://github.com/blozinski056/movie-list")}
            // onMouseOver={() => changeSrc("./videos/movie-list.mp4")}
            onMouseOver={vid2On}
          >
            MovieTracker
          </h1>
          <p>
            A movie list website using The Movie Database API. When you and your friends are deciding which movie to cross off your never-ending list, use Movie Tracker to compare the movies you have and have not seen.
          </p>
        </div>
        <div className="project reveal">
          <h1 
            onClick={() => open("https://github.com/blozinski056/reminder-app")}
            // onMouseOver={() => changeSrc("./videos/reminder-app.mp4")}
            onMouseOver={vid3On}
          >
            RemindMe
          </h1>
          <p>
            A CRUD reminder website with colors and animations to calm your stress when you have a lot on your plate.
          </p>
        </div>
        <div className="project-video reveal" onMouseEnter={() => isInside(true)} onMouseLeave={() => isInside(false)}>
          {vid1 && <video className="video-player" id="vid1" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/anime-ecommerce.mp4" type="video/mp4" />
          </video>}

          {vid2 && <video className="video-player" id="vid2" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/movie-list.mp4" type="video/mp4" />
          </video>}

          {vid3 && <video className="video-player" id="vid3" autoPlay playsInline muted loop>
            <source className="video-player-source" src="./videos/reminder-app.mp4" type="video/mp4" />
          </video>}
        </div>
      </div>
    </section>
  )
}