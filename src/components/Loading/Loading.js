import React from 'react';
import { Coin } from 'react-cssfx-loading';

import './Loading.css';

const Loading = () => {
  return (
    <div className="ovelay">
      <Coin color="red" />
      <Coin color="red" />
      <Coin color="red" />
      <Coin color="red" />
    </div>
  );
};

export default Loading;
