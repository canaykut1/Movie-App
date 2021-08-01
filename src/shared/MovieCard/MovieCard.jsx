import React, { useState } from "react";
import "./MovieCard.scss";
import defaultPoster from "../../assets/img/default-poster.png";
import { useHistory } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { poster_path, title, name } = movie;
  const fullPath = `http://image.tmdb.org/t/p/w342${poster_path}`;
  const [isPointMoved, setIsPointMoved] = useState(false);

  const history = useHistory();
  const goDetails = (e) => {
    history.push({
      pathname: "/details",
      state: { movie },
    });
  };

  return (
    <div
      className="movie-card-component"
      onClick={(e) => {
        e.preventDefault();
      }}
      onPointerDown={() => {
        setIsPointMoved(false);
      }}
      onPointerMove={() => {
        setIsPointMoved(true);
      }}
      onPointerUp={() => {
        if (isPointMoved) {
          setIsPointMoved(true);
          return;
        }
        goDetails();
      }}
    >
      <img src={poster_path ? fullPath : defaultPoster} alt="poster" width="160" />
      <div className="movie-name">{title ? title : name}</div>
    </div>
  );
};

export default MovieCard;
