import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ArrowRight } from '@mui/icons-material';
import './ForgotPassword.css';

import NavSide from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email đã được gửi', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      toast.warn('Không gửi được email', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div>
      <NavSide />
      <div className="bodyside">
        <div className="pageContainer">
          <header>
            <p className="pageHeader">Quên mật khẩu?</p>
          </header>
          <main>
            <form onSubmit={onSubmit}>
              <input
                type="email"
                className="emailInput"
                placeholder="Email"
                id="email"
                value={email}
                onChange={onChange}
              ></input>

              <div className="signInBar">
                <div className="signInText">Send reset link</div>
                <button className="signInButton">
                  <ArrowRight></ArrowRight>
                </button>
              </div>
            </form>
          </main>
          <Link className="loginScreen_button" to="/signIn">
            Đăng Nhập
          </Link>
          <ToastContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ForgotPassword;
