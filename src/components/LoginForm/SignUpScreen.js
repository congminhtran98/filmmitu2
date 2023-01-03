import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import './SignUpScreen.css';

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
    toast.success('Đăng ký thành công ');
    return new Promise((res) => {
      setTimeout(() => {}, 100);
    });

    // navigate('/');
  };

  useEffect(() => {
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length > 0) {
      alert(arrayErrors[0]?.message, { pauseOnHover: false });
    }
  }, [errors]);

  return (
    <div className="signUpScreen">
      <form onSubmit={handleSubmit(submitForm)}>
        <h1>Đăng ký thành viên</h1>
        <input type="text" placeholder="Họ" {...register('firstName')} />
        <input type="text" placeholder="Tên" {...register('lastName')} />
        <input type="email" placeholder="Gmail" {...register('email')} />
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <button type="submit">Đăng ký ngay</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUpScreen;
