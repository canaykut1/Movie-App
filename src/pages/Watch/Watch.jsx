import * as React from "react";
import { useHistory } from "react-router-dom";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import "./Watch.scss";

const Watch = (props) => {
  //This condition created to redirect users the main page to handle error which will occur is directly going to /watch page via URL
  const history = useHistory();
  if (!props.location.state) history.push("/");

  //I wanted to use react router state to pass movie title, Alternatively it would be done by redux
  const { title } = props?.location?.state || "";
  return (
    <div className="watch-component">
      <h3>{title}</h3>
      <ShakaPlayer autoPlay src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </div>
  );
};

export default Watch;
