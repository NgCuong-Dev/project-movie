import moment from "moment/moment";
import React from "react";

export default function ItemTabMovie({ phim }) {
  return (
    <div className="flex space-x-5 border-b border-black pb-4 ">
      <img
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
        src={phim.hinhAnh}
        alt=""
      />
      <div className="">
        <h2 className="font-medium text-xl">{phim.tenPhim}</h2>
        <div className="grid gap-5 grid-cols-3">
          {phim.lstLichChieuTheoPhim.map((item) => {
            return (
              <span
                className="text-green-700 rounded p-2 shadow-sm bg-slate-200 "
                style={{ fontSize: "13px" }}
              >
                {moment(item.ngayChieuGioChieu).format("DD-mm-yyyy")}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
