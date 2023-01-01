import React from 'react';

import '../HomeScreen.css';

import Navside from '../../../components/Nav/NavSide';
import Footer from '../../../components/Footer/Footer';
import SliderMovie from '../../../components/Slider/SliderMovie';
import Title from '../../../components/Shared/Tittle';

const MovieScreen = () => {
  return (
    <div className="homeScreen">
      <Navside />
      <div className="bodyside container">
        <Title title={`Phim lẻ`} />
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
