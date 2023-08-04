import React from "react";
import { Desktop, Mobile, Tablet } from "../Layout/Responsive";
import HeaderDesktop from "../Header/HeaderDesktop";
import HeaderTablet from "../Header/HeaderTablet";
import HeaderMobile from "../Header/HeaderMobile";

export default function Header() {
  return (
    <div>
      <Desktop>
        <HeaderDesktop></HeaderDesktop>
      </Desktop>
      <Tablet>
        <HeaderTablet></HeaderTablet>
      </Tablet>
      <Mobile>
        <HeaderMobile></HeaderMobile>
      </Mobile>
    </div>
  );
}
