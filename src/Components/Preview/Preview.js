import React from "react";
import { Desktop, Mobile, Tablet } from "../Layout/Responsive";
import PreviewDeskTop from "../Preview/PreviewDesktop";
import PreviewTablet from "../Preview/PreviewTablet";
import PreviewMobile from "../Preview/PreviewMobile";
export default function () {
  return (
    <div>
      <Desktop>
        <PreviewDeskTop></PreviewDeskTop>
      </Desktop>
      <Tablet>
        <PreviewTablet></PreviewTablet>
      </Tablet>
      <Mobile>
        <PreviewMobile></PreviewMobile>
      </Mobile>
    </div>
  );
}
