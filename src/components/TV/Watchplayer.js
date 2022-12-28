import React from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';

const watchplayer = () => {
  return (
    <div>
      <Link className="banner_button" to={`/`}>
        quay lại
      </Link>
      <Player />
    </div>
  );
};

export default watchplayer;
