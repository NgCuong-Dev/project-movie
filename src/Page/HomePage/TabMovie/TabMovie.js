import React, { useEffect, useState } from "react";
import { movieServ } from "../../../service/movieService";

import { Tabs } from "antd";
import ItemTabMovie from "./ItemTabMovie";
const onChange = (key) => {
  console.log(key);
};
export default function TabMovie() {
  let [danhSachHeThongRap, setDanhSachHeThongRap] = useState([]);
  useEffect(() => {
    movieServ
      .getMovieByTheater()
      .then((res) => {
        setDanhSachHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderHeThongRap = () => {
    return danhSachHeThongRap.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: <img className="h-16" src={heThongRap.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            style={{ height: "800px" }}
            defaultActiveKey="1"
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="w-80 truncate">
                    <p className="uppercase text-green-500 font-medium text-left">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="text-gray-400 text-left">{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div
                    style={{ height: 700, overflowY: "scroll" }}
                    className="space-y-5"
                  >
                    {cumRap.danhSachPhim.slice(10, 20).map((phim) => {
                      return <ItemTabMovie phim={phim} />;
                    })}
                  </div>
                ),
              };
            })}
            onChange={onChange}
          />
        ),
      };
    });
  };

  return (
    <div className="container_list md:block hidden">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        style={{ height: "800px" }}
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
