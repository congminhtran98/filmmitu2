import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ArrowRight } from '@mui/icons-material';

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
      toast.success('Không gửi được email', {
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
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Quên mật khẩu</p>
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
          <Link className="forgotPasswordLink" to="/signIn">
            Đăng Nhập
          </Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowRight></ArrowRight>
            </button>
          </div>
        </form>
      </main>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
