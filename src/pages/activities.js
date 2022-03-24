import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { PulseLoader } from "react-spinners";
import { withToast } from "../hoc";
import { ActivitiesDesktop, ActivitiesMobile, Footer } from "../components";
import { setActivities } from "../actions";
import axios from "axios";
import styled from "styled-components";

const Activities = ({ successToast, errorToast }) => {
  const [loading, setLoading] = useState(true);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/fakeActivity`
      );
      if (data.status === 200) {
        const tableData = data.data.sort((a, b) => b.id - a.id);
        dispatch(setActivities(tableData));
        setLoading(false);
        successToast("Data loaded successfully!");
      } else {
        setLoading(false);
        errorToast("Could not load activities data!");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      errorToast("Could not load activities data!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ActivitiesType = isMobileOrTablet
    ? ActivitiesMobile
    : ActivitiesDesktop;

  if (loading) {
    return (
      <Loader>
        <PulseLoader size={20} color="#7052e2" />
      </Loader>
    );
  } else if (!loading && activities.length === 0) {
    return (
      <Loader>
        <NoResult>No Activities Found</NoResult>
      </Loader>
    );
  }
  return (
    <>
      <ActivitiesType />
      <Footer />
    </>
  );
};

export default withToast(Activities);

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoResult = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;

  @media only screen and (min-width: 1920px) {
    font-size: 2.5rem;
  }
`;
