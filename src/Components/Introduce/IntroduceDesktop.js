import React from "react";
import banner_intro from "../../Assets/introduce_background.jpg";
// import dienthoai from "../../Assets/dienthoai.png";
import banner from "../../Assets/intro_phone.jpg";
export default function Introduce() {
  return (
    <div
      className="container_Introduce flex justify-center items-center "
      style={{
        backgroundImage: `url(${banner_intro})`,
        position: "relative",
        width: "100%",
        height: "110vh",
      }}
    >
      <divq
        className="content_left space-y-7 w-1/2 "
        style={{ zIndex: "999999", color: "white" }}
      >
        <h1 className="font-bold text-3xl">
          Ứng Dụng tiện lợi dành cho <br />
          người yêu điện ảnh
        </h1>
        <p className="text-xl">
          Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm <br /> rạp
          và đổi quà hấp dẫn.
        </p>
        <button className="bg-orange-600 p-3 mb-3 rounded-lg w-1/2">
          APP MIỄN PHÍ - TẢI VỀ NGAY!
        </button>
        <br />
        <span className="pt-3">
          TIX có hai phiên bản <a>IOS&Android</a>
        </span>
      </divq>
      <div className="content_right h-full">
        <div
          className="h-full w-60 bg-contain bg-no-repeat p-2"
          style={{ backgroundImage: "url(./img/dienthoai.png)",marginTop:"100%" }}
        >
          {/* <img src={dienthoai} width={210} alt=""></img> */}
          <img
            className="w-full object-cover"
            style={{
              borderRadius: "29px",
            }}
            src={banner}
            width={200}
            height={210}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
