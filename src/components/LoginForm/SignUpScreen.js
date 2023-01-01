import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { addUser } from '../../actions/fireStoreActions';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import './SignInScreen.css';

const SignUpScreen = () => {
  const schema = Yup.object({
    firstName: Yup.string()
      .required('First name is required')
      .max(10, 'Max 10 characters'),
    lastName: Yup.string()
      .required('Last name is required')
      .max(10, 'Max 10 characters'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Your password must be 8 characters or more'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  // async function register(e) {
  //   e.preventDefault();
  //   try {
  //     const { _tokenResponse, user } = await createUserWithEmailAndPassword(
  //       auth,
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     );
  //     const { displayName = emailRef, email, photoURL, uid } = user;
  //     if (_tokenResponse.isNewUser) {
  //       await addUser({ displayName, email, photoURL, uid });
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //     // toast.error(error.message);
  //   }
  // }
  const navigate = useNavigate();
  const submitForm = async (values) => {
    if (!isValid) return;
    console.log(isSubmitted);

    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: `${values.firstName} ${values.lastName}`,
    });
    await addDoc(collection(db, 'users'), {
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      photoURL: auth.currentUser?.photoURL,
      displayName: auth.currentUser.displayName,
    });
    toast.success('Register successfully');
    navigate('/');
  };

  useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      toast.error(arrayErrors[0]?.message, { pauseOnHover: false });
    }
  }, [errors]);

  return (
    <div className="signInScreen">
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Đăng ký thành viên</h1>
        <input
          type="text"
          placeholder="First name"
          {...register('firstName')}
        />
        <input type="text" placeholder="Last name" {...register('lastName')} />
        <input type="email" placeholder="Email" {...register('email')} />
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <button type="submit">Đăng ký ngay</button>
      </form>
    </div>
  );
};

export default SignUpScreen;
