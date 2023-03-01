import React from "react";
import "./style/Home.css";
import { Link } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
function Home() {
  return (
    <section>
      <div className="home-landing">
        <div className="home-text">
          <h1 className="home-title">Welcome in BioskopQu</h1>
          <h3 className="home-desc">Enjoy your Journey trought best movie</h3>

          <Link className="nav-item" to="/movie">
            <button className="home-button">
              <p>Watch now</p>

              <BiMoviePlay className="icon" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
