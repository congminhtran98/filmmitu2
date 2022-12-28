import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const history = useNavigate();
  return (
    <div className="site-footer">
      <h3 className="footer-top" onClick={() => history('/AboutUs')}>Bạn có câu hỏi? Liên hệ với chúng tôi.</h3>
      <ul className="footer-links">
        <li onClick={() => history('/AboutUs')}>Vấn đề thường gặp</li>
        <li onClick={() => history('/AboutUs')}>Trung tâm trợ giúp</li>
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
