import React from "react";
import { useDispatch } from "react-redux";
import {
  openFilterModal,
  openNonOwnAssetModal,
  openOwnAssetModal,
  setNonOwnAssetModalData,
  setOwnAssetModalData,
} from "../../../actions";
import * as Styled from "./styled.components";
import { FilterButton, Search, Asset } from "../../../components";
import { assets } from "../../../mock";
import { icons } from "../../../utils/constants/icons";

const MarketplaceMobile = () => {
  const dispatch = useDispatch();

  const handleFilterButtonClick = () => {
    dispatch(openFilterModal());
  };

  const handleNonOwnAssetClick = (data) => {
    dispatch(setNonOwnAssetModalData(data));
    dispatch(openNonOwnAssetModal());
  };

  const handleOwnAssetClick = (data) => {
    dispatch(setOwnAssetModalData(data));
    dispatch(openOwnAssetModal());
  };

  return (
    <>
      <Styled.Container>
        <Styled.Title>Assets to Buy</Styled.Title>
        <Search
          fullWidth={true}
          rightIcon={<FilterButton onClick={handleFilterButtonClick} />}
        />
        <Styled.AssetsContainer>
          {assets.map((asset) => (
            <Asset
              asset={asset}
              key={asset.id}
              onClick={handleNonOwnAssetClick}
            />
          ))}
        </Styled.AssetsContainer>
        <Styled.TokensOpener>
          <Styled.ArrowUpIcon>{icons.arrowDoubleUp}</Styled.ArrowUpIcon>
          Tokens
        </Styled.TokensOpener>
        <Styled.Title>My Assets</Styled.Title>
        <Search
          fullWidth={true}
          rightIcon={<FilterButton onClick={handleFilterButtonClick} />}
        />
        <Styled.AssetsContainer>
          {assets.map((asset) => (
            <Asset
              asset={asset}
              key={asset.id}
              onClick={handleOwnAssetClick}
            />
          ))}
        </Styled.AssetsContainer>
      </Styled.Container>
    </>
  );
};

export default MarketplaceMobile;
