import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import './NavSide.css';
import { useStore } from '../../stored';

import logo from '../../images/logo.png';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { RiMovie2Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineFire } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';

const Navside = () => {
  const user = useStore((state) => state.user);
  const logOut = () => {
    signOut(auth);
  };

  const history = useNavigate();

  return (
    <div className="nav-body">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <div className="nav-link">
              <span
                className="link-text logo-text"
                onClick={() => history('/')}
              >
                FlimMitu
              </span>
              <img src={logo} alt="" onClick={() => history('/')} />
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <Link to="/search">
                <AiOutlineSearch className="nav-link-icon" />
                <span className="link-text">Tìm kiếm</span>
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <MdOutlineMovieFilter
                className="nav-link-icon"
                onClick={() => history('/moviescreen')}
              />
              <span
                className="link-text"
                onClick={() => history('/moviescreen')}
              >
                Phim lẻ
              </span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <RiMovie2Line
                className="nav-link-icon"
                onClick={() => history('/tvscreen')}
              />
              <span className="link-text" onClick={() => history('/tvscreen')}>
                TV series
              </span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <AiOutlineFire className="nav-link-icon" />
              <span className="link-text" onClick={() => history('/')}>
                Mới và nổi bật
              </span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <AiOutlineHeart
                onClick={() => history('/favorite-movie')}
                className="nav-link-icon"
              />
              <span
                className="link-text"
                onClick={() => history('/favorite-movie')}
              >
                Danh mục yêu thích
              </span>
            </div>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <BsPeople
                className="nav-link-icon"
                onClick={() => history('/profile')}
              />
              <span className="link-text" onClick={() => history('/profile')}>
                Hồ sơ của tôi
              </span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <CgProfile
                className="nav-link-icon"
                onClick={() => history('/changePassword')}
              />
              <span
                className="link-text"
                onClick={() => history('/changePassword')}
              >
                Đổi mật khẩu
              </span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" id="hide">
              {user ? (
                <FaSignOutAlt
                  className="nav-link-icon"
                  onClick={() => logOut()}
                />
              ) : (
                <FaSignInAlt
                  className="nav-link-icon"
                  style={{ color: 'green' }}
                  onClick={() => history('/signIn')}
                />
              )}
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              {user ? (
                <span
                  className="link-text profileScreen_signOut"
                  onClick={() => logOut()}
                >
                  Đăng xuất
                </span>
              ) : (
                <span
                  className="link-text profileScreen_signOut"
                  onClick={() => history('/signIn')}
                >
                  Đăng nhập
                </span>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navside;
