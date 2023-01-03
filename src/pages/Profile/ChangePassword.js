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
    <div>
      <h1>PASSWORD</h1>
      <h3>User Password</h3>
      <p>
        Here you can change your current password. <br />
        If you are signing in with Google or Facebook, you can't change your
        password.
      </p>
      <form onSubmit={handleSubmit}>
        {passwordEdit ? (
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
              <button onClick={() => setPasswordEdit(false)}>Cancel</button>
              <button
                onClick={async () => {
                  if (
                    !newPassword.trim().length ||
                    !oldPassword.trim().length
                  ) {
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
        ) : (
          <div>
            <button
              onClick={() => {
                setPasswordEdit(true);
              }}
            >
              {'Click to change your password'}
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => {
                setPasswordEdit(true);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
