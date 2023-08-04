import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieServ } from "../../../service/movieService";
import moment from "moment";
import { Button } from "antd";
import { Modal } from "antd";
import { Progress } from "antd";
import "./style.css";
import { NavLink } from "react-router-dom";

export default function Details() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let params = useParams();
  console.log(params);
  const [movie, setMovie] = useState({});
  console.log(movie);
  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let result = await movieServ.getDetailsMovie(params.id);
        setMovie(result.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, []);
  return (
    <div
      className="container detailpage flex w-screen h-screen "
      style={{
        color: "white",
        backgroundColor: "black",
      }}
    >
      <img
        style={{ position: "relative" }}
        className="w-1/3"
        src={movie.hinhAnh}
      />
      <div className="content space-y-5 ml-3 text-xl">
        <span className="text-3xl font-bold">{movie.tenPhim}</span>
        <h2>{moment(movie.ngayKhoiChieu).format("DD-mm-yyyy")}</h2>
        <p>{movie.moTa}</p>

        <Progress
          className="ml-10"
          type="circle"
          strokeColor={{
            "0%": "#2a9d8f",
            "100%": "#ffafcc",
          }}
          format={(percent) => `${percent / 10}`}
          percent={movie.danhGia * 10}
        />
        <p>
          Đánh giá:
          <span className="text-orange-500 space-x-1 start">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
        </p>
        <NavLink to={`/booking/${movie.maPhim}`}>
          <Button className="w-30 h-10 mt-2" type="primary" danger>
            Mua Vé
          </Button>
        </NavLink>

        <Button
          className="play"
          style={{
            position: "absolute",
            left: "15%",
            top: "400px",
            backgroundColor: "white",
            color: "black",
          }}
          type="primary"
          onClick={showModal}
        >
          <i class="fa-solid fa-play"></i>
        </Button>

        <Modal
          style={{ width: "800px" }}
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <iframe
            width="500"
            height="315"
            src={movie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal>
      </div>
    </div>
  );
}
