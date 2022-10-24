import React from "react";

export default function Work() {

  return (
    <section className="work">
      <h1 className="background">WORK</h1>

      <div className="project reveal">
        <h3>WeebSite</h3>
        <p>An ecommerce website for mainstream anime merchandise.
          <br /><em>HTML5, SCSS, React.js</em>
        </p>
      </div>

      <div className="project reveal">
        <h3>Movie Tracker</h3>
        <p>When you and your friends are deciding which movie to cross off your never ending list, use Movie Tracker to compare the movies you have and have not seen.
          <br /><em>HTML5, CSS3, React.js</em>
        </p>
      </div>

      <div className="project reveal">
        <h3>RemindMe</h3>
        <p>A reminder app with colors and animations to calm your stress when you have a lot on your plate.
          <br /><em>HTML5, CSS3, React.js</em>
        </p>
      </div>
    </section>
  )
}