import * as React from "react";
import "./Details.scss";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Details = (props) => {
  const { title, name, poster_path, overview, release_date, original_language, vote_count, vote_average } =
    props?.location?.state?.movie;
  const fullPath = `http://image.tmdb.org/t/p/w342${poster_path}`;

  return (
    <div className="details-component">
      <div className="info">
        <h1>{title ? title : name}</h1>
        <p>{overview}</p>
        <div className="data">
          <span> Release Date: </span>
          <span className="value"> {release_date} </span>
        </div>
        <div className="data">
          <span> Original Language: </span>
          <span className="value"> {original_language} </span>
        </div>
        <div className="data">
          <span> Vote average: </span>
          <span className="value"> {vote_average} </span>
        </div>
        <div className="data">
          <span> Vote Count: </span>
          <span className="value"> {vote_count} </span>
        </div>
        <Button size="large" variant="contained">
          <Link
            to={{
              pathname: "/watch",
              state: { title: title ? title : name },
            }}
          >
            Watch Movie
          </Link>
        </Button>
      </div>
      <div className="poster">
        <img src={fullPath} alt="poster" />
      </div>
    </div>
  );
};

export default Details;
