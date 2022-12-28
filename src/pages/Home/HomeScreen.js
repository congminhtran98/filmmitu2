import React from 'react';
import Banner from '../../components/Banner/Banner';
import './HomeScreen.css';
import Navside from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';
import Row from '../../components/Row/Row';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navside />
      <div className="bodyside">
        <Banner />
        <Row />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
