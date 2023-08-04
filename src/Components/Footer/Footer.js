import React from "react";
import { Desktop, Tablet, Mobile } from "../Layout/Responsive";
import FooterDesktop from "./FooterDesktop";
import FooterTablet from "./FooterTablet";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  return (
    <div>
      <Desktop>
        <FooterDesktop></FooterDesktop>
      </Desktop>
      <Tablet>
        <FooterTablet></FooterTablet>
      </Tablet>
      <Mobile>
        <FooterMobile></FooterMobile>
      </Mobile>
    </div>
  );
}
