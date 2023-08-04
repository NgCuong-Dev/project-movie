import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  // console.log(key);
};
const items = [
  {
    key: "1",
    label: (
      <div className="tabs-review md:flex-col">
        <h1 className="font-medium text-3xl">Điện Ảnh</h1>
      </div>
    ),
    children: (
      <div>
        <div
          classname="content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div classname="content_left" style={{ marginRight: "20px" }}>
            <img
              src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
              alt="#"
            />
            <div>
              <h1
                classname="font-medium"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                TENET công bố ngày khởi chiếu chính thính tại Việt Nam
              </h1>
              <p classname="font-normal text-xl" style={{ fontSize: "20px" }}>
                Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                báo
                <br />
                chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị
                trường bên <br /> ngoài Bắc Mỹ, trong đó có Việt Nam.
              </p>
            </div>
          </div>
          <div classname="content_right">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg"
              alt="#"
            />
            <div>
              <h1
                classname="font-medium text-2xl pb-3"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
              </h1>
              <p classname="font-normal text-xl" style={{ fontSize: "20px" }}>
                Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông
                báo
                <br />
                chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị
                trường bên <br /> ngoài Bắc Mỹ, trong đó có Việt Nam.
              </p>
            </div>
          </div>
        </div>
        <div className="content_review flex mt-5">
          <div className="first_content mr-3">
            <img
              style={{ width: "500px" }}
              src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png"
              alt=""
            />
            <h2 className="font-medium text-xl">
              Gerard Butler cùng bồ cũ Deadpool tham gia <br /> Greenland
            </h2>
            <p style={{ fontSize: "18px" }}>
              Bộ phim hành động mang đề tài tận thế Greenland: Thảm <br /> Họa
              Thiên Thạch đến từ nhà sản xuất của loạt phim John <br /> Wick.
            </p>
          </div>
          <div cla ssName="second_content">
            <img
              style={{ width: "500px" }}
              src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518743844.png"
              alt=""
            />
            <h2 className="font-medium text-xl">
              Diễn viên đặc biệt của Bằng Chứng Vô Hình
            </h2>
            <p style={{ fontSize: "18px" }}>
              Bộ phim hành động mang đề tài tận thế Greenland: Thảm <br /> Họa
              Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="tabs-review md:flex-col">
        <h1 className="font-medium text-3xl">Review</h1>
      </div>
    ),
    children: (
      <div>
        <div classname="content" style={{ display: "flex" }}>
          <div classname="content_left" style={{ marginRight: "20px" }}>
            <img
              src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg"
              alt="#"
            />
            <div>
              <h1
                classname="font-medium"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân <br />
                cảm động của Khả Như và Kiều Minh Tuấn
              </h1>
              <p classname="font-normal text-xl" style={{ fontSize: "20px" }}>
                Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện
                tình cha, mẹ - con đầy nước
              </p>
            </div>
          </div>
          <div classname="content_right">
            <img
              src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg"
              alt="#"
            />
            <div>
              <h1
                classname="font-medium text-2xl pb-3"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân
              </h1>
              <p classname="font-normal text-xl" style={{ fontSize: "20px" }}>
                Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và
                cảm xúc về tình cảm gia đình.
              </p>
            </div>
          </div>
        </div>
        <div className="content_review flex mt-5">
          <div className="first_content mr-3">
            <img
              style={{ width: "530px" }}
              src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg"
              alt=""
            />
            <h2 className="font-medium text-xl">
              [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết <br /> người bệnh
              hoạn vô hình?
            </h2>
            <p style={{ fontSize: "18px" }}>
              Bộ phim hành động mang đề tài tận thế Greenland: Thảm <br /> Họa
              Thiên Thạch đến từ nhà sản xuất của loạt phim John <br /> Wick.
            </p>
          </div>
          <div cla ssName="second_content">
            <img
              style={{ width: "500px" }}
              src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg"
              alt=""
            />
            <h2 className="font-medium text-xl">
              [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa
            </h2>
            <p style={{ fontSize: "18px" }}>
              Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái <br />
              kết lại không tương xứng với phần mở đầu hứa hẹn.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="tabs-review md:flex-col">
        <h1 className="font-medium text-3xl">Khuyến Mãi</h1>
      </div>
    ),
    children: (
      <div>
        <div classname="content" style={{ display: "flex" }}>
          <div classname="content_left" style={{ marginRight: "20px" }}>
            <img
              src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg"
              alt="#"
            />
            <div>
              <h1
                classname="font-medium"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân <br />
                cảm động của Khả Như và Kiều Minh Tuấn
              </h1>
              <p classname="font-normal text-xl" style={{ fontSize: "20px" }}>
                Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện
                tình cha, mẹ - con đầy nước
              </p>
            </div>
          </div>
          <div classname="content_right">
            <img
              src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg"
              alt="#"
            />
            <div>
              <h1
                classname="font-medium text-2xl pb-3"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân
              </h1>
              <p classname="font-normal text-xl" style={{ fontSize: "20px" }}>
                Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và
                cảm xúc về tình cảm gia đình.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
export default function Preview() {
  return (
    <div className=" md:block hidden preview container_list  flex justify-center font-2xl">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}
