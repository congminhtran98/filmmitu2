import React from 'react';

import './ProfileSetting.css';

import { useStore } from '../../stored';

import Navside from '../../components/Nav/NavSide';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Shared/Tittle';
// import { auth } from '../Library/firebase';

const UserSetting = () => {
  // const { setLoading, loading } = useStore((state) => state);
  const user = useStore((state) => state.user);

  return (
    <div className="profileScreen">
      <Navside />
      <div className="bodyside">
        <Title title={`Quản lí hồ sơ`} />
        <div className="profileScreen_body">
          <p>
            <label>Quản lí tài khoản</label> thành viên từ tháng 12/2022
          </p>
          <div className="profileScreen_article">
            <div className="profileScreen_label">
              <div>Tư cách thành viên và tính phí</div>
              <button>Hủy tư cách thành viên</button>
            </div>
            <div className="profileScreen_content">
              <div className="profileScreen_content1">
                Tên đăng nhập: {user.email}
              </div>
              <div className="profileScreen_content1">Mật khẩu: ********</div>
              <div className="profileScreen_content1">
                Không có thông tin thanh toán
              </div>
            </div>
            <div className="profileScreen_footer">
              <div className="profileScreen_content">Thay đổi email</div>
              <div className="profileScreen_content">Thay đổi mật khẩu</div>
              <div className="profileScreen_content">Thêm số điện thoại</div>
            </div>
          </div>
          <div className="profileScreen_article">
            <div className="profileScreen_label">
              <div>Thông tin gói dịch vụ</div>
            </div>
            <div className="profileScreen_content">Hội viên thường</div>
            <div className="profileScreen_footer">
              <button>Nâng cấp</button>
            </div>
          </div>
          <div className="profileScreen_article">
            <div className="profileScreen_label">
              <div>Bảo mật và quyền riêng tư</div>
            </div>
            <div className="profileScreen_content">
              <div className="">
                Kiểm soát quyền truy cập vào tài khoản này, xem các thiết bị
                hoạt động gần đây nhất và hơn thế nữa
              </div>
            </div>
            <div className="profileScreen_footer">
              <div className="profileScreen_footer3">
                Quản lí quyền truy cập và thiết bị
              </div>
              <div className="profileScreen_footer3">
                Đăng xuất khỏi tất cả thiết bị
              </div>
              <div className="profileScreen_footer3">
                Tải xuống thông tin cá nhân
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserSetting;
