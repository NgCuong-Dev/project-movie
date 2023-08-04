import React from "react";
import { Button, Card } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";
import "./styleMovieList.css";
const { Meta } = Card;
export default function ItemMovie({ phim }) {
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
  return (
    <div className="flex w-full justify-center">
      <Card
        hoverable
        style={{
          width: "100%",
        }}
        cover={
          <div>
            <img
              className="object-cover h-[365px] w-full relative"
              alt="example"
              src={phim.hinhAnh}
              id="hinhanh"
            />
            <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
              <Button
                className=" bg-white view-trailer"
                type="primary"
                onClick={showModal}
              >
                <i class="fa-solid fa-play text-black"></i>
              </Button>
            </div>
          </div>
        }
      >
        <Meta className="text-center" title={phim.tenPhim} />

        <NavLink to={`/detail/${phim.maPhim}`}>
          <Button className="my-3 w-full" type="primary" danger>
            Xem Chi Tiết
          </Button>
        </NavLink>

        <Modal
          className="w-70"
          title="Trailer"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <iframe
            width="450"
            height="315"
            src={phim.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal>
      </Card>
    </div>
  );
}
