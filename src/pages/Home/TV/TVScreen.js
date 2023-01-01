import React from 'react';

import '../HomeScreen.css';

import Navside from '../../../components/Nav/NavSide';
import Footer from '../../../components/Footer/Footer';
import SliderTv from '../../../components/Slider/SliderTv';
import Title from '../../../components/Shared/Tittle';

const TVScreen = () => {
  return (
    <div className="homeScreen">
      <Navside />
      <div className="bodyside container">
      <Title title={`TV series`} />
      <div className="tv">
        <SliderTv type="trending" />
        <SliderTv type="popular" />
        <SliderTv type="top_rated" />
      </div>
        <Footer />
      </div>
    </div>
  );
};

export default TVScreen;
