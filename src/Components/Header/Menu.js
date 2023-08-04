import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div className="menu ">
      <ul
        style={{ textDecoration: "none" }}
        className=" flex font-bold md: flex-col space-y-5 lg:flex-row space-x-5 "
      >
        <li className="lg:pt-5 md:pl-5">
          <NavLink>Lịch Chiếu</NavLink>
        </li>
        <li>
          <NavLink>Cụm Chiếu</NavLink>
        </li>
        <li>
          <NavLink>Tin Tức</NavLink>
        </li>
        <li>
          <NavLink>Ứng Dụng</NavLink>
        </li>
      </ul>
    </div>
  );
}
