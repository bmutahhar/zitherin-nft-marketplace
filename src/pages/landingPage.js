import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  LandingMain,
  LandingCharacters,
  LandingRoadmap,
  LandingRoadmapMobile,
  LandingFAQ,
  LandingSocial,
  LandingFooter,
} from "../components";

const LandingPage = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <LandingMain />
      <LandingCharacters />
      {/* <LandingRoadmap /> */}
      {isMobileOrTablet ? <LandingRoadmapMobile /> : <LandingRoadmap />}
      <LandingFAQ />
      <LandingSocial />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
