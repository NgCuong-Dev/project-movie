import React from "react";
import { Desktop, Mobile, Tablet } from "../Layout/Responsive";
import IntroduceDesktop from "./IntroduceDesktop";
import IntroduceTablet from "./IntroduceTablet";
import IntroduceMobile from "./IntroduceMobile";
export default function Introduce() {
  return (
    <div>
      <Desktop>
        <IntroduceDesktop></IntroduceDesktop>
      </Desktop>
      <Tablet>
        <IntroduceTablet></IntroduceTablet>
      </Tablet>
      <Mobile>
        <IntroduceMobile></IntroduceMobile>
      </Mobile>
    </div>
  );
}
