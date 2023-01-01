import React from 'react';

import './HomeScreen.css';

import Banner from '../../components/Banner/Banner';
import Genre from '../../components/Genre/Genre';
import Footer from '../../components/Footer/Footer';
import Navside from '../../components/Nav/NavSide';
import Row from '../../components/Row/Row';
import Title from '../../components/Shared/Tittle';
import Tag from '../../components/Tag/Tag';

const HomeScreen = () => {
  return (
    <div className="homeScreen" >
      <Navside />
      <div className="bodyside">
        <Title title={`FilmMiTu | Xem phim phờ riii`} />
        <Banner />
        <Genre />
        <Row />
        <Tag />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
