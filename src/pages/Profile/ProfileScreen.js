import React from 'react';
import './ProfileScreen.css';
import Navside from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Shared/Tittle';
// import { auth } from '../Library/firebase';

import { useAuth } from '@frontegg/react';

const ProfileScreen = () => {
  // const user = useStore((state) => state.user);
  // const { setLoading, loading } = useStore((state) => state);
  const { user } = useAuth();

  return (
    <div className="profileScreen">
      <Navside />
      <div className="bodyside">
        <Title title={`Hồ sơ cá nhân`} />
        <div className="profileScreen_body">
          <h1>Hồ sơ cá nhân </h1>
          <div className="profileScreen_info">
            <img
              alt="avatar"
              src={
                user?.profilePictureUrl
                  ? user?.profilePictureUrl
                  : '/user-non-avatar.png'
              }
            />
            <div className="profileScreen_details">
              <h1>Email:</h1>
              <h2>{user?.email ? user?.email : 'No Information'}</h2>
              <h1>
                Tên tài khoản: {user?.name ? user?.name : 'No Information'}
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfileScreen;
