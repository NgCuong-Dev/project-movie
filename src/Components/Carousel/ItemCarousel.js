import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import "./styleCarousel.css";
export default function ItemCarousel({ banner, handleSeeVideo }) {
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
  let renderVideo = (key) => {
    if (key == 0) {
      return (
        <iframe
          className="p-2"
          width="100%"
          height="800"
          src="https://www.youtube.com/embed/_dZKlP2Sr8E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      );
    } else if (key == 1) {
      return (
        <iframe
          width="100%"
          height="800"
          src="https://www.youtube.com/embed/uqJ9u7GSaYM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      );
    } else {
      return (
        <iframe
          width="100%"
          height="800"
          src="https://www.youtube.com/embed/W07ue_ToXZQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      );
    }
  };
  return (
    <>
      <div className="carousel" style={{ position: "relative" }}>
        <img
          className="w-full"
          style={{ height: "700px", objectFit: "cover" }}
          src={banner.hinhAnh}
          alt="#"
        />
        <i
          onClick={showModal}
          style={{
            position: "absolute",
            left: "47%",
            top: "40%",
            zIndex: "99999",
            border: "2px solid white",
            backgroundColor: "gray",
            opacity: "0.7",
            padding: "40px 50px",
            borderRadius: "50%",
            color: "white",
            fontSize: "30px",
          }}
          class="fa-solid fa-play"
        ></i>
      </div>
      <Modal
        className="w-100"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>{renderVideo()}</div>
      </Modal>
    </>
  );
}
