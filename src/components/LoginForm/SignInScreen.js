import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { Auth } from '../../config/firebase';
import { auth, googleProvider } from '../../config/firebase';
import { addUser } from '../../actions/fireStoreActions';
import { useStore } from '../../stored';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './SignInScreen.css';

import SignUpScreen from './SignUpScreen';

const SignInScreen = () => {
  const { setLoading, loading } = useStore((state) => state);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [signUp, setSignUp] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    Auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((AuthUser) => {
        console.log(AuthUser);
      })
      .catch((error) => {
        toast.warn(error.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  const handleLogin = async (Provider) => {
    setLoading(true);
    try {
      const { _tokenResponse, user } = await signInWithPopup(auth, Provider);
      const { displayName, email, photoURL, uid } = user;
      if (_tokenResponse.isNewUser) {
        await addUser({ displayName, email, photoURL, uid });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="signInScreen">
      {signUp ? (
        <SignUpScreen />
      ) : (
        <form>
          <h1>Đăng nhập</h1>
          <input ref={emailRef} placeholder="Email" type="email"></input>
          <input
            ref={passwordRef}
            placeholder="Password"
            type="password"
          ></input>
          <button type="submit" onClick={signIn} disabled={loading}>
            Đăng nhập
          </button>

          <h5>
            <span className="signInScreen_gray">
              Bạn mới tham gia Netflix?{' '}
            </span>
            <Link
              onClick={() => {
                setSignUp(true);
              }}
            >
              <div className="forgotPassword">Đăng ký ngay</div>
            </Link>
          </h5>

          <Link className="forgotPassword" to="/forgotPassword">
            Quên mật khẩu
          </Link>

          <button
            className={`login-form-button login-form-google ${
              loading ? 'disableButton' : ''
            }`}
            onClick={() => handleLogin(googleProvider)}
            disabled={loading}
          >
            <box-icon
              name="google"
              type="logo"
              flip="vertical"
              color="white"
            ></box-icon>
            <span>Đăng nhập bằng Google</span>
          </button>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default SignInScreen;
