import React from 'react';
import { Link } from 'react-router-dom';

import './404.css';

import Title from '../../components/Shared/Tittle.js';

const ErrorPage = () => {
  return (
    <>
      <Title title={'SOS SOS SOS!!!!'} />
      <div className="error">
        <div className="error-body container">
          <h1 className="error-title">404</h1>
          <p className="error-description">
            Oops! Đã có lỗi xảy ra! SOS SOS... ( ͡❛ ⏥ ͡❛) ( ͡❛ ⏥ ͡❛){' '}
          </p>
          <Link to="/">Quay lại trang chủ</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
