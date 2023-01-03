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

import NavSide from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';

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
      <NavSide />
      <div className="bodyside">
        <div className="changePassWord">
          <h1>ĐỔI MẬT KHẨU</h1>
          <p>
            Bạn có thể đổi mật khẩu tại đây. Nếu bạn đăng nhập bằng Google, bạn
            không thể thay đổi mật khẩu của mình.
          </p>
          <form className="formChangePassWord" onSubmit={handleSubmit}>
            <div className="">
              <input
                id="oldPass"
                type="password"
                placeholder={'Mật khẩu CŨ'}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
              <input
                id="newPass"
                type="password"
                placeholder={'Mật khẩu MỚI'}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              <div>
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
                  {loading ? (
                    <div></div>
                  ) : (
                    <div className="changePassButton">
                      Xác nhận đổi mật khẩu
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ChangePassword;
