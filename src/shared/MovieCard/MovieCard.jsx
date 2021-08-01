import * as React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
import defaultPoster from "../../assets/img/default-poster.png"

const MovieCard = ({ movie }) => {
  const { poster_path, title, name } = movie;  
  const fullPath = `http://image.tmdb.org/t/p/w342${poster_path}`;
  return (
    <div className="movie-card-component">
      <Link
        to={{
          pathname: "/details",
          state: { movie },
        }}
      >
        <img src={poster_path ? fullPath : defaultPoster} alt="poster" width="160" />
        <div className="movie-name">{title ? title : name}</div>
      </Link>
    </div>
  );
};

export default MovieCard;
