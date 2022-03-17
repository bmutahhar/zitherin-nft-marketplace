import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { withToast } from "../hoc";
import {
  MarketplaceDesktop,
  MarketplaceMobile,
  OwnAssetModal,
  NonOwnAssetModal,
  FilterModal,
  Footer,
} from "../components";
import {
  setOwnAssetsData,
  setNonOwnAssetsData,
  // setTokensData,
} from "../actions";
import axios from "axios";

const Marketplace = ({ successToast, errorToast }) => {
  const [loading, setLoading] = useState(true);

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const fetchData = async (endPoint) => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/${endPoint}`
      );
      return data.data;
    } catch (err) {
      console.log(err);
      errorToast("Error while fetch data for marketplace!");
      return [];
    }
  };

  useEffect(() => {
    Promise.all([
      fetchData("getUserTokensFake"),
      fetchData("getNonOwnedTraitsFake"),
    ]).then((results) => {
      dispatch(setOwnAssetsData(results[0]));
      dispatch(setNonOwnAssetsData(results[1]));
      console.log("User owned traits: ", results[0]);
      console.log("Non user owned traits: ", results[1]);
      setLoading(false);
      successToast("Data fetched successfully!");
    });
  }, []);

  const MarketplaceType = isMobileOrTablet
    ? MarketplaceMobile
    : MarketplaceDesktop;

  return (
    <>
      <MarketplaceType loading={loading} />
      {modal.isOwnAssetModalOpen && <OwnAssetModal />}
      {modal.isNonOwnAssetModalOpen && <NonOwnAssetModal />}
      {modal.isFilterModalOpen && <FilterModal />}
      <Footer />
    </>
  );
};

export default withToast(Marketplace);
