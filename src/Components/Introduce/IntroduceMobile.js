import React from "react";
import banner_intro from "../../Assets/introduce_background.jpg";
import dienthoai from "../../Assets/dienthoai.png";
import banner from "../../Assets/intro_phone.jpg";
export default function Introduce() {
  return (
    <div
      className="container_Introduce flex justify-center items-center sm:flex-col h-140 pt-5  md:flex-col lg:flex-row "
      style={{
        backgroundImage: `url(${banner_intro})`,
        position: "relative",
        width: "100%",
        height: "140vh",
      }}
    >
      <div
        className="content_left space-y-7"
        style={{ zIndex: "999999", color: "white", paddingLeft: "70px" }}
      >
        <br />
      </div>
      <div className="content_right h-full">
        <div
          className="h-full w-60 bg-contain bg-no-repeat p-2"
          style={{ backgroundImage: "url(./img/dienthoai.png)" }}
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
