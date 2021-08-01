import * as React from "react";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import "./Watch.scss";

const Watch = (props) => {
  const { title } = props?.location?.state;
  return (
    <div className="watch-component">
      <h3>{title}</h3>
      <ShakaPlayer
        autoPlay
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        muted={true}
      />
    </div>
  );
};

export default Watch;
