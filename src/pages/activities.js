import React from "react";
import { useMediaQuery } from "react-responsive";
import { ActivitiesDesktop, ActivitiesMobile } from "../components";

const Activities = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobileOrTablet) {
    return <ActivitiesMobile />;
  }
  return <ActivitiesDesktop />;
};

export default Activities;
