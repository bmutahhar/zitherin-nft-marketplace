import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import character6 from "../assets/characters/Character-6.png";
import { sleep } from "../utils/helpers";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";

const Marketplace = ({ successToast, errorToast }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tokensData, setTokensData] = useState([]);
  const [ownAssetData, setOwnAssetsData] = useState([]);
  const [nonOwnAssetData, setNonOwnAssetData] = useState([]);
  const [selectedToken, setSelectedToken] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const modal = useSelector((state) => state.modal);

  const dropEndHandler = (asset, monitor) => {
    if (monitor.didDrop()) {
      const { token } = monitor.getDropResult();
      setSelectedAsset(asset);
      setSelectedToken(token);
      console.log("Oops! you dropped on me :)");
      console.log("Asset id: ", asset.id);
      console.log("Token id: ", token.id);
    }
  };

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
      successToast("Data fetched successfully!");
    });
  }, []);

  useEffect(() => {
    if (selectedToken !== null && selectedAsset !== null) {
      const tokensCopy = tokensData.slice();
      const tokenIndex = tokensCopy.indexOf(selectedToken);
      let updatedData;
      console.log(1);
      Promise.all([
        fetchData(
          `getUpdatedCharacterFake/${selectedToken.id}/${selectedAsset.id}`
        ),
      ]).then((results) => {
        updatedData = results[0];
        selectedToken.image = updatedData.imageUrl;
        tokensCopy[tokenIndex] = selectedToken;
        setTokensData(tokensCopy);
        setSelectedAsset(null);
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
        dropEndHandler={dropEndHandler}
      />
      {modal.isOwnAssetModalOpen && <OwnAssetModal />}
      {modal.isNonOwnAssetModalOpen && <NonOwnAssetModal />}
      {modal.isFilterModalOpen && <FilterModal />}
      <Footer />
    </>
  );
};

export default withToast(Marketplace);
