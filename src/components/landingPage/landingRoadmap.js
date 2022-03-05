import React from "react";
import * as Styled from "./styles";
import { backgroundImages } from "../../utils/constants/images";

const LandingRoadmap = () => {
  return (
    <Styled.SectionThree>
      <Styled.BgImage src={backgroundImages.clouds} />
      <Styled.Overlay src={backgroundImages.bgOverlay}/>
    </Styled.SectionThree>
  );
};

export default LandingRoadmap;
