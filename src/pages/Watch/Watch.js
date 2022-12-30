import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from '../../utils/constans';
import Simular from '../../components/Simular/Simular';
import Title from '../../components/Shared/Tittle';
import Comment from '../../components/Comment/Comment';

import SeasonItem from '../../components/TV/SeasonItem';
import TVInfo from '../../components/TV/TVInfo';
import EmbedVideoTv from '../../components/TV/EmbedVideoTv';
import Navside from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';

function Watch() {
  const { esp, season, id } = useParams();
  const [seasonTv, setSeasonTv] = useState(1);
  const [espTv, setEspTv] = useState(1);
  const [seasonData, setSeasonData] = useState([]);
  const [seasonCurrent, setSeasonCurrent] = useState(Number(season));
  const [espCurrent, setEspCurrent] = useState();
  const [nameTv, setNameTv] = useState();

  useEffect(() => {
    setEspTv(esp);
    setSeasonTv(season);
  }, [esp, season]);

  useEffect(() => {
    setSeasonCurrent(Number(season));
  }, [season, esp]);

  useEffect(() => {
    const getInfoTv = (id) => {
      fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setSeasonData(data.seasons);
          setNameTv(data.name);
        });
    };

    getInfoTv(id);
  }, [id]);

  useEffect(() => {
    const getEspCurrent = (id, season, esp) => {
      fetch(
        `${BASE_URL}/tv/${id}/season/${season}/episode/${esp}?api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setEspCurrent(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getEspCurrent(id, season, esp);
  }, [esp, season, id]);

  return (
    <div>
      <Navside />
      <div className="container bodyside">
        <Title
          title={`${nameTv} | Season ${season} | Episode ${esp} | Phim Moi`}
        />
        <div className="watch-tv-container">
          <div className="watch-wrap">
            <EmbedVideoTv id={id} espTv={espTv} seasonTv={seasonTv} />
            <TVInfo nameTv={nameTv} espCurrent={espCurrent} />
            <Comment movieId={id} />
          </div>

          <div className="watch-tv-other-season">
            {seasonData.map((item) => {
              if (item.season_number > 0) {
                return (
                  <SeasonItem
                    seasonCurrent={seasonCurrent}
                    setSeasonCurrent={setSeasonCurrent}
                    id={id}
                    key={item.id}
                    item={item}
                  />
                );
              }

              return null;
            })}
          </div>
        </div>
        <div className="simularMovieTV">
          <Simular />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Watch;
