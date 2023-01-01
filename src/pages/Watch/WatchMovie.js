import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Watch.css';

import { API_KEY, BASE_URL } from '../../utils/constans';

import SimularColumn from '../../components/Simular/SimularColumn';
import Title from '../../components/Shared/Tittle';
import Comment from '../../components/Comment/Comment';
import EmbedVideoMovie from '../../components/Movie/EmbedVideoMovie';
import MovieInfo from '../../components/Movie/MovieInfo';
import Navside from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';
// import Player from '../../components/TV/Player';

function WatchMovie() {
  const params = useParams();

  const [info, setInfo] = useState({});

  const { id } = params;

  useEffect(() => {
    const getInfo = (id) => {
      fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => setInfo(data));
    };

    getInfo(id);
  }, [id]);

  return (
    <div>
      <Navside />
      <div className="container bodyside">
        <Title title={`${info?.title} | Watch | Filmmitu`} />

        <div className="watch-movie-container">
          <div className="watch-wrap">
            <EmbedVideoMovie id={id} />
            {/* <Player />  */}
            <MovieInfo info={info} />

            <Comment movieId={id} />
          </div>
          <div className="simularMovie">
            <SimularColumn />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default WatchMovie;
