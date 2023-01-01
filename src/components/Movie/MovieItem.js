import React from 'react';
import { useState } from 'react';

import './MovieItem.css';

import ImageFade from '../Shared/ImgFade';

function MovieItem({ data }) {
  const { poster_path } = data;
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container">
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="movie-item"
        style={{ background: 'black' }}
      >
        <ImageFade
          lazy_src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
          alt={data.title ? data.title : data.name}
        />
        {isShown && (
          <div className="movie-item-hover">
            <div>Phim: {data.title ? data.title : data.name}</div>
            <div>
              Rating: <yellow>{data.vote_average}/10</yellow> ({data.vote_count}
              vote)
            </div>
            <div>Ngày phát hành: {data.release_date}</div>
            <div>
              <label>Giới thiệu: </label>
              <p>{data.overview}</p>
            </div>
            <div>{data.adult}</div>
          </div>
        )}
        <p className="line-clamp-1 movie-item-title">
          {data?.title || data?.name}
        </p>
      </div>
    </div>
  );
}

export default MovieItem;
