import React, { useState } from "react";
import cgv_nes from "../../Assets/CGV-Cinemas.png";
import UserMenu from "./UserMenu";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";

export default function HeaderDesktop() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="h-25 shadow light-Mode header ">
      <div className="container mx-auto flex justify-between items-center h-full ">
        <NavLink to={"/"}>
          <span className="animate-pulse">
            <img src={cgv_nes} width={"170px"} alt="" />
          </span>
        </NavLink>
        <Menu />
        <UserMenu />
      </div>
    </div>
  );
}
