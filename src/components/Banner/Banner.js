import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../library/axios';
import requests from '../../library/requests';

import './Banner.css';

import videoBg from '../../videos/WizardBattle.mp4';
import { GoMute } from 'react-icons/go';
import { ImLoop2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Banner = () => {
  const history = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNeflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  return (
    <header className="banner">
      <video src={videoBg} autoPlay muted playsinline loop />
      <div className="banner_contents">
        <h1 className="banner_title">
          {' '}
          Harry Potter and the Order of the Phoenix{' '}
        </h1>
        <div className="banner_buttons">
          <div className="banner_button_left">
            <Link className="banner_button" to={`/watchTrailer`}>
              Trailer
            </Link>
            <Link className="banner_button" to={`/watchplayer`}>
              Xem phim
            </Link>
            <button
              className="banner_button1"
              onClick={() => history('/filminfo')}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              i
            </button>
            {isShown && (
              <div className="banner_button_hover">
                <h1>Harry Potter and the Order of the Phoenix</h1>
                <div>Thời lượng: 138 Phút</div>
                <div>Thể loại: Phim Viễn Tưởng,</div>
                <div>Điểm IMDb:7,5</div>
                <div>Năm Phát Hành: 2007</div>
                <div>Quốc gia: Phim Âu Mỹ</div>
                <div>
                  Diễn viên: Emma Watson, Daniel Radcliffe, Ralph Fiennes,
                  Rupert Grint,
                </div>
                <div>Đạo diễn: David Yates,</div>
              </div>
            )}
          </div>
          <div className="banner_button_right">
            <ImLoop2 className="banner_button_right1" />
            <GoMute className="banner_button_right1" />
          </div>
        </div>
        <h1 className="banner_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          faucibus, nulla sed tristique mattis, justo dui volutpat leo, ac
          dapibus dolor ligula ac urna. Quisque iaculis pretium purus, non
          efficitur neque sodales nec. Nunc ac mi purus. Phasellus condimentum
          mauris dui, sit amet tempor enim elementum scelerisque.
        </h1>
      </div>
      <div className="banner_gradient" />
    </header>
  );
};

export default Banner;
