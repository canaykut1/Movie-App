import React, { useState } from "react";
import "./MovieCard.scss";
import defaultPoster from "../../assets/img/default-poster.png";
import { useHistory } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { poster_path, title, name } = movie;
  const fullPath = `http://image.tmdb.org/t/p/w342${poster_path}`;
  const [isPointMoved, setIsPointMoved] = useState(false);

  const history = useHistory();
 
  //I wanted to use react router state to pass movie title, Alternatively it would be done by redux
  const goDetails = (e) => {
    history.push({
      pathname: "/details",
      state: { movie },
    });
  };
  //I have a lot of events on div because of a bug
  //BUG: When try to drag the slider it was firing the onClick event and go to Details page, to avoid this I had to add these all onPointerUp, onPointerMove, onPointerDown
  return (
    <div
      className="movie-card-component"
      onClick={(e) => e.preventDefault()}
      onPointerDown={() => setIsPointMoved(false)}
      onPointerMove={() => setIsPointMoved(true)}
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
