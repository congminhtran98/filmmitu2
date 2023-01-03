import React from 'react';
import { Link } from 'react-router-dom';
import Navside from '../Nav/NavSide';
import Footer from '../Footer/Footer';

import Player from './Player';

const watchplayer = () => {
  return (
    <div>
      <Navside />
      {/* <Link className="banner_button" to={`/`}>
        quay lại
      </Link> */}
      <div className="bodyside">
        <Player />

        <Footer />
      </div>
    </div>
  );
};

export default watchplayer;
