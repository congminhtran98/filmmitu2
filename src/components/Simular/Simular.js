// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Link, useParams } from 'react-router-dom';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Simular.css';

import { API_KEY, BASE_URL } from '../../utils/constans';
import useInnerWidth from '../../hooks/useInnerWidth';
import Skeleton from '../Skeleton/Skeleton';
import MovieItem from '../Movie/MovieItem';

const Simular = () => {
  SwiperCore.use([Navigation]);

  const params = useParams();

  const { media_type, id } = params;

  const [movie, setMovie] = useState([]);

  const [loading, setLoading] = useState(true);

  const width = useInnerWidth();

  let item;

  if (width >= 1024) {
    item = 5;
  } else if (width < 1024 && width >= 740) {
    item = 4;
  } else if (width < 740 && width >= 500) {
    item = 3;
  } else {
    item = 2;
  }

  useEffect(() => {
    const getMovie = () => {
      fetch(
        `${BASE_URL}/${media_type || 'tv'}/${id}/similar?api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };

    setLoading(true);
    getMovie();
  }, [media_type, id]);

  return (
    <div className="slider simular">
      <div className="title">
        <h1>Phim tương tự</h1>
      </div>
      <Swiper
        navigation
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={item}
      >
        {!loading ? (
          movie
            ?.filter((p) => p.id !== id)
            .map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/details/${media_type || 'tv'}/${item.id}`}>
                  <MovieItem data={item} />
                </Link>
              </SwiperSlide>
            ))
        ) : (
          <div className="grid-layout grid-gap-1rem-1rem">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Simular;
