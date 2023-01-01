import React, { useMemo, useState } from 'react';
import { getMovieHistory } from '../../utils/localStro';

import RecentlySlider from '../Slider/RecentlySlider';
import SliderMovie from '../Slider/SliderMovie';
import SliderTv from '../Slider/SliderTv';
import Skeleton from '../Skeleton/Skeleton';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Row = (setShowModal, type) => {
  const historyWatch = useMemo(getMovieHistory, []);
  const [movies, setMovies] = useState({
    loading: true,
    data: [],
  });
  const [genre, setGenres] = useState([]);
  return (
    <div className="container">
      {historyWatch.length > 0 ? <RecentlySlider data={historyWatch} /> : null}
      <div className="movie">
        <SliderMovie type="trending" />
        <SliderMovie type="popular" />
        <SliderMovie type="top_rated" />
      </div>
      <div className="tv">
        <SliderTv type="trending" />
        <SliderTv type="popular" />
        <SliderTv type="top_rated" />
      </div>
      {/* <AnimatePresence>
        {!movies.loading
          ? movies.data.map((movie, index) => (
              <React.Fragment key={movie.id}>
                <MoviePoster
                  setShowModal={setShowModal}
                  index={index}
                  key={movie.id}
                  baseUrl={baseUrl}
                  movie={movie}
                  genres={genre}
                  movieId={movie.id}
                  type={type}
                />
              </React.Fragment>
            ))
          : [1, 2, 3, 4, 5, 6].map((n) => (
              <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                animation="wave"
                width={180}
                height={270}
                key={n}
              />
            ))}
      </AnimatePresence> */}
    </div>
  );
};

export default Row;
