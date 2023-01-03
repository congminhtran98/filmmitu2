import React from 'react';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase';
import { useStore } from '../../stored';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ChangePassword.css';

const ChangePassword = () => {
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { user } = useStore((state) => state);

  return (
    <div className="ChangePassword">
      <h1 className="text">PASSWORD</h1>
      <h3 className="text">User Password</h3>
      <p className="text">
        Here you can change your current password. <br />
        If you are signing in with Google or Facebook, you can't change your
        password.
      </p>
      <form className="formChangePassWord" onSubmit={handleSubmit}>
        <div>
          <input
            id="oldPass"
            type="password"
            placeholder={'Your OLD password'}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
          <input
            id="newPass"
            type="password"
            placeholder={'Your NEW password'}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <div>
            <button
              onClick={async () => {
                if (!newPassword.trim().length || !oldPassword.trim().length) {
                  toast.warn('Nhập mật khẩu của bạn', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  return;
                }
                setLoading(true);
                const credential = EmailAuthProvider.credential(
                  user.email,
                  oldPassword
                );
                const result = await reauthenticateWithCredential(
                  auth.currentUser,
                  credential
                );
                updatePassword(auth.currentUser, newPassword)
                  .then((res) => {
                    toast.warn('Đổi mật khẩu thành công!', {
                      position: 'top-center',
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    });
                  })
                  .catch((err) => {
                    console.log(err.code);
                  });
                setLoading(false);
                setPasswordEdit(false);
              }}
            >
              {loading ? <div></div> : 'Finish'}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
