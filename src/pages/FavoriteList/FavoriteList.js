import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteFavoriteMovie } from '../../actions/fireStoreActions';
import MovieItem from '../../components/Movie/MovieItem';
import Loading from '../../components/Loading/Loading';
import { useStore } from '../../stored';
import { useAuth } from '@frontegg/react';
import Title from '../../components/Shared/Tittle';
import './Favorite.css';

const FavoriteList = () => {
  const { favoriteList, setFavoriteList } = useStore((state) => state);
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleDeleteMovie = async (data) => {
    const result = window.confirm(
      'Are you sure you want to delete this movie?'
    );
    if (result) {
      if (!user) return;
      setLoading(true);
      const result = await deleteFavoriteMovie(data);

      const newFavoriteList = favoriteList.filter(
        (item) => item.id !== result.id
      );

      setFavoriteList(newFavoriteList);
      setLoading(false);
    }
  };

  return (
    <div className="favorite">
      <Title title={'Danh mục ưa thích'} />
      <div className="container">
        <h1 className="favorite-title">Favorite Movie</h1>

        {this.state.favoriteList !== undefined ? (
          <div className="grid-layout grid-gap-1rem-1rem">
            {favoriteList &&
              favoriteList.map((item) => (
                <div key={item.id} className="image-favorite">
                  <Link
                    to={`/details/${item.movie.media_type}/${item.movie.id}`}
                  >
                    <MovieItem data={item.movie} />
                  </Link>
                  <div
                    className="deltele-favorite"
                    onClick={() => handleDeleteMovie(item)}
                  >
                    <box-icon
                      size="md"
                      color="white"
                      name="x-circle"
                    ></box-icon>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="not-favorite">
            <h1 className="favorite-title">Not movies !!</h1>
          </div>
        )}
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default FavoriteList;
