import React from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

const NavUser = ({ user }) => {
  const logOut = () => {
    signOut(auth);
  };

  return (
    <div className="header-user">
      <img alt="avatar" src={user.photoURL} />
      <ul className="header-user-list">
        <li className="header-user-item">{user.displayName}</li>

        <li className="header-user-item" onClick={logOut}>
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default NavUser;
