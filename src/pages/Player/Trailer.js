import React from 'react';

import './Player.css';

import Nav from '../components/Header/Nav';
import TrailerControl from './trailerControl';

const Trailer = () => {
  return (
    <div>
      <Nav />
      <TrailerControl />
    </div>
  );
};

export default Trailer;
