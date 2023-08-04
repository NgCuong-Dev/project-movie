import { Button, Select, Space } from "antd";
import { movieServ } from "../../service/movieService";
import { useEffect, useState } from "react";
import "./styleChoose.css";

const ChooseFilms = () => {
  const [danhSach, setDanhSach] = useState();
  useEffect(() => {
    movieServ
      .getMovieList()
      .then((res) => {
        setDanhSach(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderDanhSachPhim = () => {
    return danhSach?.map((phim) => {
      return {
        label: phim.tenPhim,
        value: phim.maPhim,
      };
    });
  };
  const renderDanhSachRap = () => {
    return danhSach?.map((phim) => {
      return {
        label: phim.biDanh,
        value: phim.biDanh,
      };
    });
  };
  const renderDanhSachNgayChieu = () => {
    return danhSach?.map((phim) => {
      return {
        label: phim.ngayKhoiChieu,
        value: phim.ngayKhoiChieu,
      };
    });
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="h-20 choosefimls container_list bg-white border-2 shadow-2xl rounded-xl">
      <Space className=" space flex justify-center items-center h-full" wrap>
        <Select
          className="select"
          defaultValue="Phim"
          style={{
            width: 200,
            fontWeight: "bold",
          }}
          onChange={handleChange}
          options={renderDanhSachPhim()}
        />
        <Select
          defaultValue="Rạp"
          style={{
            width: 200,
          }}
          options={renderDanhSachRap()}
        />
        <Select
          defaultValue="Ngày Giờ Chiếu"
          style={{
            width: 300,
          }}
          allowClear
          options={renderDanhSachNgayChieu()}
        />
        <Button type="primary" danger>
          Mua Vé Ngay
        </Button>
      </Space>
    </div>
  );
};
export default ChooseFilms;
