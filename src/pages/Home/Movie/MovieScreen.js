import React from 'react';
import '../HomeScreen.css';
import Navside from '../../../components/Nav/NavSide';
import Footer from '../../../components/Footer/Footer';
import SliderMovie from '../../../components/Slider/SliderMovie';

const MovieScreen = () => {
  return (
    <div className="homeScreen">
      <Navside />
      <div className="bodyside container">
        <div className="movie">
        <SliderMovie type="trending" />
        <SliderMovie type="popular" />
        <SliderMovie type="top_rated" />
      </div>
        <Footer />
      </div>
    </div>
  );
};

export default MovieScreen;
