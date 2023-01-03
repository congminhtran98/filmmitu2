import React from 'react';
import Navside from '../Nav/NavSide';
import Footer from '../Footer/Footer';

const WatchTrailer = () => {
  return (
    <div>
      <Navside />
      <div className="bodyside">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/oijDWW1CMt0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default WatchTrailer;
