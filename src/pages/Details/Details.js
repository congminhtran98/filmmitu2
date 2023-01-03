import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRatings from 'react-star-ratings';

import './Details.css';

import { API_KEY, BASE_URL } from '../../utils/constans';
import { addMovieFromPlaylist } from '../../actions/fireStoreActions';
import { addMovieLocal } from '../../utils/localStro';
import { useStore } from '../../stored';

import Cast from '../../components/Cast/Cast';
import Simular from '../../components/Simular/Simular';
import ModalTrailer from '../../components/Trailer/ModalTrailer';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import Navside from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Shared/Tittle.js';
import { AiOutlineHeart } from 'react-icons/ai';

function DetailsMovie() {
  // const param = useParams();
  // const { media_type, id } = param;
  let { media_type, id } = useParams();
  console.log(media_type, id);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { user, favoriteList, setFavoriteList } = useStore((state) => state);
  const [loadingAddMovie, setLoadingAddMovie] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetailsMovie = (media_type, id) => {
      fetch(`${BASE_URL}/${media_type}/${id}?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((details) => {
          setData(details);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };

    setLoading(true);
    getDetailsMovie(media_type, id);
  }, [id, media_type]);

  useEffect(() => {
    if (data.id) {
      addMovieLocal({
        id: data?.id,
        poster_path: data?.poster_path,
        media_type: media_type,
        title: data?.name || data?.title,
        viewAt: Date.now(),
      });
    }
  }, [data, media_type]);

  const handleAddToFavorites = async () => {
    if (!user) return toast.error('You are not logged in');

    if (favoriteList) {
      const movieExist = favoriteList.some((item) => item.movie.id === data.id);

      if (movieExist) {
        return toast.warn('Phim đã tồn tại trong danh mục', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    }

    setLoadingAddMovie(true);
    const newFavorite = await addMovieFromPlaylist(user.uid, data, media_type);
    setFavoriteList([...favoriteList, newFavorite]);
    setLoadingAddMovie(false);
    toast.success('Thêm phim thành công', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <div>
      <Navside />
      <Title title={'Thông tin phim/series'} />
      <div className="bodyside">
        <div
          className={`details ${loading ? 'skeleton' : ''}`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
          }}
        >
          <div className="container">
            <div className="details-container">
              <div className={`details-poster ${loading ? 'skeleton' : ''}`}>
                {!loading && (
                  <img
                    className={`details-poster-img`}
                    src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                    alt="poster"
                  />
                )}
              </div>
              <div className="details-info">
                {loading ? (
                  <h1 className="mr-bottom-20px skeleton skeleton-text h-36px">
                    {''}
                  </h1>
                ) : (
                  <h1 className={`details-info-title`}>
                    {data.name || data.title}
                  </h1>
                )}
                {loading ? (
                  <>
                    <p className="skeleton skeleton-text h-20px"></p>
                    <p className="skeleton skeleton-text h-20px"></p>
                    <p className="skeleton skeleton-text h-20px"></p>
                    <p className="skeleton skeleton-text h-20px last-child"></p>
                  </>
                ) : (
                  <p className="details-info-overview">{data.overview}</p>
                )}
                {loading ? (
                  <>
                    <p className="mr-top-20px skeleton skeleton-text h-20px"></p>
                  </>
                ) : (
                  <p className="release_date">
                    {data.release_date
                      ? `Release date: ${data.release_date}`
                      : `Last episode: ${data.last_air_date}`}
                  </p>
                )}
                <div className="genres">
                  {data.genres &&
                    data.genres.map((item) => (
                      <Button key={item.id} content={item.name} />
                    ))}
                </div>
                <div className="ratings">
                  <StarRatings
                    rating={data.vote_average}
                    starRatedColor="red"
                    numberOfStars={10}
                    name="rating"
                    starDimension="15px"
                    starSpacing="2px"
                  />
                  <div className="ratings-count">{`(${
                    data.vote_count || 0
                  } vote)`}</div>
                </div>

                <div className="watch">
                  <Link
                    className="watch-link"
                    to={
                      media_type === 'tv'
                        ? `/watch/tv/${id}/season/1/esp/1`
                        : `/watch/movie/${id}`
                    }
                  >
                    Xem phim
                  </Link>
                  <span
                    className="watch-link"
                    onClick={() => setShowModal(true)}
                  >
                    Trailer
                  </span>
                  <span
                    className="watch-link"
                    title="Thêm vào danh mục của tôi"
                  >
                    <AiOutlineHeart onClick={handleAddToFavorites} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="homepage">
            Trang giới thiệu phim:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              className="homepage-link"
              href={data.homepage}
            >
              {data.homepage}
            </a>
          </p>

          <Cast />
          <Simular />
          {showModal ? (
            <ModalTrailer show={showModal} setShow={setShowModal} />
          ) : null}
        </div>

        {loadingAddMovie && <Loading />}
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default DetailsMovie;
