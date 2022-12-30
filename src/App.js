import React, { useEffect } from 'react';
import './styles/App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAuth, useTenantsState, useAuthActions } from '@frontegg/react';
import { fetchMovieFavorite } from './actions/fireStoreActions';
import { onAuthStateChanged } from 'firebase/auth';
import { useStore } from './stored';

import PrivateRoute from './components/shared/PrivateRoute.js';
import Loading from './components/Loading/Loading';
import Watchplayer from './components/tv/Watchplayer';

//pages
import HomeScreen from './pages/Home/HomeScreen';
import UserSetting from './pages/Profile/ProfileSetting';
import DetailsMovie from './pages/Details/Details';
import Search from './pages/Search/Search';
import SearchResults from './pages/Search/SearchResults';
import WatchTv from './pages/Watch/Watch';
import WatchMovie from './pages/Watch/WatchMovie';
import Player from './components/tv/Player';
import Navside from './components/Nav/NavSide';
import ViewMorePage from './pages/ViewMore/ViewMorePage';
import MovieScreen from './pages/Home/Movie/MovieScreen';
import TVScreen from './pages/Home/TV/TVScreen.js';
import AboutUs from './pages/About/About';
import ErrorPage from './pages/404/404Page.js';
import FavoriteList from './pages/FavoriteList/FavoriteList';
import ProfileScreen from './pages/Profile/ProfileScreen';

function App() {
  // đăng nhập r sẽ load về trang chủ
  // const { setUser, user } = useStore((state) => state);
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();

  const { setFavoriteList } = useStore((state) => state);

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(isAuthenticated, async (user) => {
  //     if (user) {
  //       const newFavoriteList = await fetchMovieFavorite(user.sid);
  //       setFavoriteList(newFavoriteList);
  //       return;
  //     }
  //     setFavoriteList([]);

  //     return () => {
  //       unsub();
  //     };
  //   });
  // }, [setFavoriteList]);

  // Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);

  // useEffect(() => {
  //   // lưu thay đổi vào bộ nhớ cục bộ của trình duyệt
  //   const unsubscribe = Auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       //log in
  //       setUser(userAuth);
  //       return;
  //     }
  //     setUser(null);
  //     return () => {
  //       unsubscribe();
  //     };
  //   });

  //   return unsubscribe;
  // }, [setUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  if (typeof user === 'undefined') {
    return <Loading />;
  }

  return (
    <div className="App">
      {/* <HomeScreen /> */}
      {/* bat buoc phai co tai khoan, neu khong se back ve Login */}
      {/* {!user ? (
        <LoginScreen />

      ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/usersetting" element={<UserSetting />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/results" element={<SearchResults />}></Route>
          <Route path="/:media_type/:type" element={<ViewMorePage />}></Route>
          <Route
            path="/details/:media_type/:id"
            element={<DetailsMovie />}
          ></Route>
          <Route
            path="/watch/tv/:id/season/:season/esp/:esp"
            element={<WatchTv />}
          ></Route>
          <Route path="/watch/movie/:id" element={<WatchMovie />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="/navside" element={<Navside />}></Route>
          <Route path="/watch/movie/:id" element={<WatchMovie />}></Route>
        </Routes>
      )}

      ) : ( */}
      <Routes>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/usersetting" element={<UserSetting />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/results" element={<SearchResults />}></Route>
        <Route path="/:media_type/:type" element={<ViewMorePage />}></Route>
        <Route
          path="/details/:media_type/:id"
          element={<DetailsMovie />}
        ></Route>
        <Route
          path="/watch/tv/:id/season/:season/esp/:esp"
          element={<WatchTv />}
        ></Route>
        <Route path="/watch/movie/:id" element={<WatchMovie />}></Route>
        <Route path="/player" element={<Player />}></Route>
        <Route path="/navside" element={<Navside />}></Route>
        <Route path="/watchplayer" element={<Watchplayer />}></Route>
        <Route path="/moviescreen" element={<MovieScreen />}></Route>
        <Route path="/tvscreen" element={<TVScreen />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route
          path="/favorite-movie"
          element={
            <PrivateRoute>
              <FavoriteList />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* )} */}
    </div>
  );
}

export default App;
