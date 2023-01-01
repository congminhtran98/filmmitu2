import React from "react";
import ShakaPlayer from "shaka-player-react";

import "./PlayerControl.css";
import "shaka-player-react/dist/controls.css";

import video from "../videos/Avengers-filmdemo.webm";

const PlayerControl = () => {
  return <ShakaPlayer autoPlay src={video} className="player" />;
};
export default PlayerControl;
