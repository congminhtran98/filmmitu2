import React from 'react';
import Banner from '../../components/Banner/Banner';
import './HomeScreen.css';
import Navside from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';
import Row from '../../components/Row/Row';
import Title from '../../components/shared/Tittle';
import Genre from '../../components/Genre/Genre';
import Tag from '../../components/Tag/Tag';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
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
