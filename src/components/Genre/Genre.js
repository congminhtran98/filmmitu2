import React from 'react';
import './Genre.css';

function Genre() {
  return (
    <div className="genre-body">
      <ul className="genre-left">
        <li className="btn">Hành động</li>
        <li className="btn">Khoa học viễn tưởng</li>
        <li className="btn">Kinh dị</li>
        <li className="btn">Hài hước</li>
        <li className="btn">Hoạt hình</li>
        <li className="btn">Hình sự</li>
        <li className="btn">Viễn tưởng</li>
        <li className="btn">Cổ trang</li>
      </ul>
      <div className="btn genre-right">Genre test</div>
    </div>
  );
}

export default Genre;
