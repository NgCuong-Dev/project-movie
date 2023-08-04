import { movieServ } from "../../service/movieService";
import { useEffect, useState } from "react";
import ItemCarousel from "../Carousel/ItemCarousel";
import { Carousel } from "antd";

export default function CarouselPage({ handleOnClick }) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    movieServ
      .getBanneFilms()
      .then((res) => {
        setBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Carousel className="carousel-page" afterChange={onChange}>
      {banner.map((item) => {
        return (
          <ItemCarousel
            handleSeeVideo={handleOnClick}
            key={item.maBanner}
            banner={item}
          />
        );
      })}
    </Carousel>
  );
}
