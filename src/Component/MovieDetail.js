import React, { useEffect, useState } from "react";
import "./style/MovieDesc.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [description, SetDescription] = useState({});
  const [genres, setGenres] = useState("");
  const ParamsId = useParams();

  // FUNCTION MEMANGGIL API .......
  useEffect(() => {
    async function detailDesMovie() {
      const request = await fetch(`${process.env.REACT_APP_BASEURL}/movie/${ParamsId.id}?api_key=${process.env.REACT_APP_APIKEY}`);
      if (!request.ok) {
        console.log("gagal cuy.....");
      }
      const respons = await request.json();
      SetDescription(respons);
      setGenres(respons.genres.map((genre) => genre.name).join(", "));
    }
    detailDesMovie();
  }, [ParamsId]);

  const DescriptionMovie = () => {
    return (
      <div className="movieDes-box" key={description.id}>
        {/* image poster movie */}
        <div className="image-movieDesc">
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${description.poster_path}`} alt="coba aja" />
          <h1>{description.title}</h1>
          <h3>{description.release_date}</h3>
        </div>
        {/* Judul dan descripsion */}
        <div className="movieDes-text">
          <div className="movieDesc-title">
            <p>
              <strong>title </strong>: {description.title}
            </p>
            <p>
              {" "}
              <strong>genres</strong> :{genres}
            </p>
            <p>
              <strong>Release</strong> : {description.release_date}
            </p>
            <p>
              <strong>average</strong> :{description.vote_average}
            </p>
            <p>
              <strong>Popularity</strong> :{description.popularity}
            </p>
            <p>
              <strong>vote count</strong> :{description.vote_count}
            </p>
            <p>
              <strong>Original Language</strong> :{description.original_language}
            </p>
            <div className="description">
              <p>{description.overview}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section>
      <DescriptionMovie />
      <div className="btn-box">
        <button className="btn btn-watch">
          <BsFillPlayCircleFill className="icon-watch" />
          <p>watch now</p>
        </button>
        <button className="btn btn-donwloand">
          <AiOutlineCloudDownload className="icon-donwloand" />
          <p>Donwloand</p>
        </button>
      </div>
    </section>
  );
};

export default MovieDetail;
