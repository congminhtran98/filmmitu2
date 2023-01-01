import React from 'react';

import './Player.css';

import Nav from '../../components/Header/Nav';
import PlayerControl from './playerControl';
import FilmInfo from './FilmInfo';

const Player = () => {
  return (
    <div>
      <Nav />
      <PlayerControl />
      <FilmInfo />
    </div>
  );
};

export default Player;
