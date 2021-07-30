import * as React from "react";
import "./MovieCard.scss";

const MovieCard = ({ posterPath, title }) => {
  const fullPath = `http://image.tmdb.org/t/p/w342${posterPath}`;
  return (
    <div className="movie-card-component">
      <img src={fullPath} alt="poster" width="160" />
      <div className="movie-name">{title}</div>
    </div>
  );
};

export default MovieCard;
