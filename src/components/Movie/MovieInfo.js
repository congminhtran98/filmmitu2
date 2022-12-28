import React from "react";

const MovieInfo = ({ info }) => {
  return (
    <div className="watch-tv-in4">
      <h1 className="movie-name">{info.title}</h1>
      <p className="movie-overview">Giới thiệu: {info.overview}</p>
      <p className="movie-release_date">Ngày phát hành: {info.release_date}</p>
    </div>
  );
};

export default MovieInfo;
