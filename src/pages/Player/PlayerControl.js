import React from "react";
import "./PlayerControl.css";
import ShakaPlayer from "shaka-player-react";
import "shaka-player-react/dist/controls.css";

import video from "../videos/Avengers-filmdemo.webm";

const PlayerControl = () => {
  return <ShakaPlayer autoPlay src={video} className="player" />;
};
export default PlayerControl;
