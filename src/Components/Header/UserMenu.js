import React, { useState } from "react";
import { useSelector } from "react-redux";
import hinhanh from "../../Assets/viego.jpg";
import { NavLink } from "react-router-dom";
import { localUserServ } from "../../service/localService";

export default function UserMenu() {
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  });
  //handle đăng xuất
  let handleLogout = () => {
    localUserServ.remove();
    // window.location.href = "/login";
    window.location.reload();
  };
  let renderContent = () => {
    if (userInfo) {
      return (
        <>
          <div className="flex space-x-2">
            <img
              src={hinhanh}
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
            />
            <span className="pt-3">{userInfo.hoTen}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border-black border-2 rounded-2xl text-xl"
            >
              <i class="fa-solid fa-arrow-right-from-bracket pr-2 text-xl"></i>
              Đăng Xuất
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div>
          <>
            <NavLink to={"/login"}>
              <button className="px-5 font-medium py-2 mr-3 border-black border-2 rounded-2xl border-icon ">
                Đăng Nhập
              </button>
            </NavLink>
            <NavLink to={"/register"}>
              <button className="px-5 py-2 mr-3 font-medium border-black  rounded-2xl border-icon border-2">
                Đăng Ký
              </button>
            </NavLink>
          </>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
