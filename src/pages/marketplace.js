import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import {
  MarketplaceDesktop,
  MarketplaceMobile,
  OwnAssetModal,
  NonOwnAssetModal,
  FilterModal,
  Footer,
} from "../components";
import character6 from "../assets/characters/Character-6.png";
import { sleep } from "../utils/helpers";
import "react-loading-skeleton/dist/skeleton.css";

const Marketplace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tokensData, setTokensData] = useState([]);
  const [ownAssetData, setOwnAssetsData] = useState([]);
  const [nonOwnAssetData, setNonOwnAssetData] = useState([]);
  const [selectedToken, setSelectedToken] = useState(null);

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
    }
  };

  useEffect(() => {
    // const ownAssetsData = fetchData("getUserTokensFake");
    // const nonOwnAssetsData = fetchData("getNonOwnedTraitsFake");
    Promise.all([
      fetchData("getUserTokensFake"),
      fetchData("getNonOwnedTraitsFake"),
    ]).then((results) => {
      // dispatch(setOwnAssetsData(results[0]));
      // dispatch(setNonOwnAssetsData(results[1]));
      const ownAssets = [];
      const nonOwnAssets = results[1];
      const tokens = results[0];
      tokens.forEach((token) => {
        ownAssets.push(...token.traits);
      });
      setOwnAssetsData(ownAssets);
      setNonOwnAssetData(nonOwnAssets);
      setTokensData(tokens);
      setIsLoading(false);
      console.log("User owned traits: ", ownAssets);
      console.log("Non user owned traits: ", results[1]);
      console.log("Tokens: ", tokens);
    });
  }, []);

  useEffect(() => {
    console.log(tokensData);
    if (selectedToken) {
      const tokensCopy = tokensData.slice();
      const tokenIndex = tokensCopy.indexOf(selectedToken);
      selectedToken.image = character6;
      tokensCopy[tokenIndex] = selectedToken;
      setTokensData(tokensCopy);
      sleep(2000).then(() => {
        console.log("Updated the token!");
        setSelectedToken(null);
      });
    }
  }, [selectedToken]);

  const MarketplaceType = isMobileOrTablet
    ? MarketplaceMobile
    : MarketplaceDesktop;

  return (
    <>
      <MarketplaceType
        isLoading={isLoading}
        ownAssetData={ownAssetData}
        nonOwnAssetData={nonOwnAssetData}
        tokens={tokensData}
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
      />
      {modal.isOwnAssetModalOpen && <OwnAssetModal />}
      {modal.isNonOwnAssetModalOpen && <NonOwnAssetModal />}
      {modal.isFilterModalOpen && <FilterModal />}
      <Footer />
    </>
  );
};

export default Marketplace;
