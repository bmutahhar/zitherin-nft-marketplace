import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { ActivitiesDesktop, ActivitiesMobile, Footer } from "../components";
import { setActivities } from "../actions";

const Activities = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/fakeActivity`
      );
      dispatch(setActivities(data.data));
      console.log("Activities: ", data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isMobileOrTablet ? <ActivitiesMobile /> : <ActivitiesDesktop />}
      <Footer />
    </>
  );
};

export default Activities;
