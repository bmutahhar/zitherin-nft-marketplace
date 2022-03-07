import React from "react";
import {
  LandingMain,
  LandingCharacters,
  LandingRoadmap,
  LandingFAQ,
  LandingSocial,
  LandingFooter,
} from "../components";

const LandingPage = () => {
  return (
    <>
      <LandingMain />
      <LandingCharacters />
      <LandingRoadmap />
      <LandingFAQ />
      <LandingSocial />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
