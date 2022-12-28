import React, { useRef } from 'react';
import './signInScreen.css';
import { Auth } from '../../config/firebase';

import { auth } from '../../config/firebase';
import { addUser } from '../../actions/fireStoreActions';

import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = () => {
  //Chưa học useRef

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function register(e) {
    e.preventDefault();
    try {
      const { _tokenResponse, user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      const { displayName, email, photoURL, uid } = user;
      if (_tokenResponse.isNewUser) {
        await addUser({ displayName, email, photoURL, uid });
      }
    } catch (error) {
      alert(error.message);
      // toast.error(error.message);
    }
  }

  return (
    <div className="signInScreen">
      <form>
        <h1>Đăng ký thành viên</h1>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <button type="submit" onClick={register}>
          Đăng ký ngay
        </button>
      </form>
    </div>
  );
};

export default SignUpScreen;
