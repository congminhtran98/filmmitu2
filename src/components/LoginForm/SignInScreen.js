import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './signInScreen.css';

import { Auth } from '../../config/firebase';
import { auth, googleProvider } from '../../config/firebase';
import { addUser } from '../../actions/fireStoreActions';
import { useStore } from '../../stored';
import { Link } from 'react-router-dom';
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
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
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
          <button type="submit" onClick={signIn}>
            Đăng nhập
          </button>

          <h5>
            <span className="signInScreen_gray">
              Bạn mới tham gia Netflix?{' '}
            </span>
            <button
              onClick={() => {
                setSignUp(true);
              }}
            >
              <span className="singInScreen_singup">Đăng ký ngay</span>
            </button>
          </h5>

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
    </div>
  );
};

export default SignInScreen;
