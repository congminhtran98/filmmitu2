import React from 'react';
import '../HomeScreen.css';
import Navside from '../../../components/Nav/NavSide';
import Footer from '../../../components/Footer/Footer';
import SliderTv from '../../../components/Slider/SliderTv';

const TVScreen = () => {
  return (
    <div className="homeScreen">
      <Navside />
      <div className="bodyside container">
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
