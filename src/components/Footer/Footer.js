import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Footer.css';

function Footer() {
  const history = useNavigate();
  return (
    <div className="site-footer">
      <h3 className="footer-top" onClick={() => history('/AboutUs')}>Bạn có câu hỏi? Liên hệ với chúng tôi.</h3>
      <ul className="footer-links">
        <li onClick={() => history('/AboutUs')}>Landing Page</li>
        <li onClick={() => history('/AboutUs')}>HomeScreenAds</li>
        <li onClick={() => history('/AboutUs')}>Tài khoản</li>
        <li onClick={() => history('/AboutUs')}>Điều khoản sử dụng</li>
        <li onClick={() => history('/AboutUs')}>Liên hệ quảng cáo</li>
        <li onClick={() => history('/AboutUs')}>Chỉ có trên &quot;FilmMiTu&quot;</li>
        <li onClick={() => history('/AboutUs')}>Project được làm bởi:</li>
        <li onClick={() => history('/AboutUs')}>Minh và Tuấn =&gt; </li>
        <li onClick={() => history('/AboutUs')}>Trong tháng 12</li>
      </ul>
    </div>
  );
}

export default Footer;
