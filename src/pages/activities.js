import React from "react";
import { useMediaQuery } from "react-responsive";
import { ActivitiesDesktop, ActivitiesMobile, Footer } from "../components";

const Activities = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobileOrTablet) {
    return (
      <>
        <ActivitiesMobile />
        <Footer />
      </>
    );
  }
  return (
    <>
      <ActivitiesDesktop />
      <Footer />
    </>
  );
};

export default Activities;
