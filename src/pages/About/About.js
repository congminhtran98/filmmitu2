import React from 'react';

import './About.css';

import NavSide from '../../components/Nav/NavSide';
import Title from '../../components/Shared/Tittle.js';

function AboutUs() {
  return (
    <div>
      <NavSide />
      <div className="about-body">
        <Title title={'Who are we?'} />
        <div>About-us</div>
        <ul>
          Nhóm thực tập sinh JVB tháng 11
          <li>Trần Công Minh</li>
          <li>Lê Ngọc Tuấn</li>
        </ul>
        <div>Thời gian thực hiện: 30/11 - 30/12/2022</div>
      </div>
    </div>
  );
}

export default AboutUs;
