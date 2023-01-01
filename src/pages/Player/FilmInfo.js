import React from "react";

import "./FilmInfo.css";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const FilmInfo = () => {
  return (
    <div className="film-content">
      <div className="rating-box">
        <div className="header">Rating film:</div>
        <AiFillStar className="rating-star" alt="" title="Dở tệ" />
        <AiFillStar className="rating-star" alt="" title="Dở" />
        <AiFillStar className="rating-star" alt="" title="Không hay" />
        <AiFillStar className="rating-star" alt="" title="Không hay lắm" />
        <AiFillStar className="rating-star" alt="" title="Bình thường" />
        <AiFillStar className="rating-star" alt="" title="Xem được" />
        <AiFillStar className="rating-star" alt="" title="Có vẻ hay" />
        <AiFillStar className="rating-star" alt="" title="Hay" />
        <AiOutlineStar className="rating-star" alt="" title="Rất hay" />
        <AiOutlineStar className="rating-star" alt="" title="Siuuuuu" />
        <span className="rating-ratecount">8đ/1202 lượt</span>
      </div>
      <ul className="filminfo-box">
        <li>
          <label>Đang phát:</label>
          <span> HD ViệtSub</span>
        </li>
        <li>
          <label>Thời lượng:</label>
          <span> 181 phút</span>
        </li>
        <li>
          <label>Thể loại:</label>
          {/* có thể chèn link những phim cũng thể loại */}
          <span>
            {" "}
            Phim Hành Động, Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Chiếu Rạp
          </span>
        </li>
        <li>
          <label>Điểm IMDb:</label>
          <span> 8.7</span>
        </li>
        <li>
          <label>Năm phát hành:</label>
          {/* có thể chèn link những phim cũng thể loại */}
          <span> 2019</span>
        </li>
        <li>
          <label>Quốc gia:</label>
          {/* có thể chèn link những phim cũng thể loại */}
          <span> Phim Âu Mỹ</span>
        </li>
        <li>
          <label>Diễn viên:</label>
          <span>
            {" "}
            Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth,
            Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Benedict
            Cumberbatch, Chadwick Boseman, Brie Larson, Tom Holland, Karen
            Gillan, Zoe Saldana, Evangeline Lilly, Tessa Thompson, L
          </span>
        </li>
        <li>
          <label>Đạo diễn:</label>
          <span> Joe Russo, Anthony Russo</span>
        </li>
      </ul>
      <div className="filmcontent-box">
        <div className="header">Nội dung phim và review:</div>
        <div className="filmcontent">
          <b>Biệt Đội Siêu Anh Hùng 4: Hồi Kết</b>
          Avengers: Endgame 2019 Full HD Vietsub Thuyết Minh Năm năm sau, vào
          năm 2023, Scott Lang trốn thoát khỏi Vương quốc lượng tử . [N 2] Đến
          được Avengers Compound , anh ấy giải thích rằng anh ấy chỉ trải qua
          năm giờ khi bị mắc kẹt. Theo giả thuyết Vương quốc lượng tử cho phép
          du hành thời gian , họ yêu cầu Stark giúp họ lấy lại các Viên đá từ
          quá khứ để đảo ngược hành động của Thanos trong hiện tại. Stark,
          Rocket và Banner, những người đã hợp nhất trí thông minh của mình với
          sức mạnh của Hulk, tạo ra một cỗ máy thời gian. Banner lưu ý rằng việc
          thay đổi quá khứ không ảnh hưởng đến hiện tại của họ; bất kỳ thay đổi
          nào tạo ra thực tế thay thế . Banner và Rocket đi đến Na Uy , nơi họ
          đến thăm khu định cư của những người tị nạn AsgardiaAsgard mới và
          chiêu mộ một Thor thừa cân và chán nản. Tại Tokyo, Romanoff tuyển dụng
          Clint Barton , người đã trở thành người cảnh giác sau cái chết của gia
          đình anh ta.
        </div>
      </div>
      <div className="filmtag-box">
        <div className="header">Tag:</div>
        <div className="filmtag">
          <li>avengers end game</li>
          <li>biet doi sieu danh hung 4</li>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
