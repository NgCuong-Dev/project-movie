import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import CarouselPage from "../../Components/Carousel/CarouselPage";
import ListMovie from "./MovieList/ListMovie";
import Trailer from "../../Components/trailer/Trailer";
import ChooseFilms from "../../Components/SelectFilms/ChooseFilms";
import TabMovie from "./TabMovie/TabMovie";
import Preview from "../../Components/Preview/Preview";
import Introduce from "../../Components/Introduce/Introduce";
import Line from "../../Components/Line/Line";

export default function HomePage() {
  let [url, setUrl] = useState("");
  let handleOnclick = (url) => {
    return setUrl(url);
  };
  return (
    <div className="space-y-5">
      <Trailer url={url} />
      <CarouselPage url={url} handleOnClick={handleOnclick} />
      <ChooseFilms />
      <ListMovie />
      <TabMovie />
      <Preview />
      <Introduce />
      <Line />
    </div>
  );
}
