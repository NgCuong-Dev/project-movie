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
        <div classname="content" style={{ display: "flex" }}>
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
          <div className="list_review">
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png"
                alt=""
              />
              <p className="ml-2 font-medium">
                Pee Nak 2 - Vạn kiếp thiên thu,
                <br /> đi tu không hết nghiệp!
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png"
                alt=""
              />
              <p className="ml-2 font-medium">
                Loạt phim kinh dị không thể bỏ <br /> lỡ trong tháng 7!
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                RÒM tung trailer hé lộ cuộc <br /> sống của dân chơi số đề
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                Antebellum - Trailer cuối cùng <br /> không hé lộ bất cứ thông
                tin gì thêm
              </p>
            </div>
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
          <div className="list_review">
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Nhím Sonic - Cười thả ga cùng <br /> chàng nhím siêu
                thanh lầy lội
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Tháng Năm Hạnh Phúc Ta Từng <br /> Có - Buông bỏ chưa
                bao giờ là việc dễ dàng
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Sắc Đẹp Dối Trá - Hương Giang <br /> kể chuyện đời mình
                qua phim ảnh
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Birds of Prey - Màn lột xác hoành <br /> tráng của
                Harley Quinn và DC
              </p>
            </div>
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
        <div className="content_review flex mt-5">
          <div className="first_content mr-3">
            <img
              style={{ width: "530px" }}
              src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg"
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
              src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg"
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
          <div className="list_review">
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Nhím Sonic - Cười thả ga cùng <br /> chàng nhím siêu
                thanh lầy lội
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Tháng Năm Hạnh Phúc Ta Từng <br /> Có - Buông bỏ chưa
                bao giờ là việc dễ dàng
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Sắc Đẹp Dối Trá - Hương Giang <br /> kể chuyện đời mình
                qua phim ảnh
              </p>
            </div>
            <div className="item flex ml-3 mb-3">
              <img
                className="w-20 rounded-xl"
                src="https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg"
                alt=""
              />
              <p className="ml-2 font-medium">
                [Review] Birds of Prey - Màn lột xác hoành <br /> tráng của
                Harley Quinn và DC
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
