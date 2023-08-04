import React, { useEffect, useState } from "react";
import { movieServ } from "../../../service/movieService";
import ItemMovie from "./ItemMovie";

export default function ListMovie() {
  const [movieList, setmovieList] = useState([]);
  useEffect(() => {
    movieServ
      .getMovieList()
      .then((res) => {
        setmovieList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 sm:grid-cols-2   grid-cols-1  container_list">
      {movieList.slice(0, 8).map((item) => {
        return <ItemMovie phim={item} key={item.maPhim} />;
      })}
    </div>
  );
}
