import React, { useEffect, useState } from "react";
import "./style/Movie.css";
import { getMovieList, searchMovie } from "./Api";
import { Link } from "react-router-dom";

const Movie = () => {
  const [getMovie, SetGetMovie] = useState([]);
  const [input, setInput] = useState("");
  const [Undefined, SetUndefined] = useState(false);

  // untuk merequest api yang ada di file api.js
  useEffect(() => {
    getMovieList().then((result) => {
      SetGetMovie(result);
    });
  }, []);

  // efek button search .........
  const submitHandle = async (e) => {
    e.preventDefault();
    if (input.length > 3) {
      const query = await searchMovie(input);
      if (query.total_results === 0 || query.total_results === undefined) {
        SetUndefined(true);
      } else {
        SetUndefined(false);
        SetGetMovie(query.results);
      }
    }
  };
  // membuat component memanggil API
  const PopularMovie = () => {
    return getMovie.map((item) => {
      return (
        <Link key={item.id} to={`/movie/${item.id}`}>
          <div className="movie-item">
            <img src={`${process.env.REACT_APP_BASEIMGURL}/${item.poster_path}`} alt="city" className="movie-img" />
            <div className="item-text">
              <h3>{item.title}</h3>
              <time>{item.release_date}</time>
            </div>
          </div>
        </Link>
      );
    });
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className="movie-page">
      <h1 className="title-topMovie">TOP MOVIE FOR YOU</h1>
      <div className="movie-search">
        <form onSubmit={submitHandle}>
          <input onChange={handleChange} type="text" className="movie-input" placeholder="search your movie......" />
          <button onClick={submitHandle} className="button-search">
            Search
          </button>
        </form>
      </div>
      <div className="movie-content">
        {Undefined ? (
          <>
            <div className="alert">
              <div className="alert-danger">
                <span className="closebtn">&times;</span>
                <strong>Opps!</strong> your movie is Undefined please try again with another title.....
              </div>
            </div>
          </>
        ) : (
          <PopularMovie />
        )}
      </div>
    </section>
  );
};

export default Movie;
