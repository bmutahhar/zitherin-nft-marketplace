import React, { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import * as Styled from "./styled.components";
import {
  Search,
  FilterButton,
  SwitchButton,
  Asset,
  Token,
} from "../../../components";
import {
  openFilterModal,
  openNonOwnAssetModal,
  openOwnAssetModal,
  setNonOwnAssetModalData,
  setOwnAssetModalData,
} from "../../../actions";
import { assets, tokens } from "../../../mock";
import { carouselBreakpoints } from "../../../utils/constants/carousel";
import { sleep } from "../../../utils/helpers/misc";
import character6 from "../../../assets/characters/Character-6.png";

export const MarketplaceDesktop = (props) => {
  const [tokensData, setTokensData] = useState(tokens);
  const [selectedToken, setSelectedToken] = useState(null);
  const dispatch = useDispatch();

  const dropEndHandler = (asset, monitor) => {
    if (monitor.didDrop()) {
      const { token } = monitor.getDropResult();
      setSelectedToken(token);
      console.log("Oops! you dropped on me :)");
      console.log("Asset id: ", asset.id);
      console.log("Token id: ", token.id);
    }
  };

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

  useEffect(() => {
    if (selectedToken) {
      const tokensCopy = tokensData.slice();
      const tokenIndex = tokensCopy.indexOf(selectedToken);
      selectedToken.token = character6;
      tokensCopy[tokenIndex] = selectedToken;
      setTokensData(tokensCopy);
      sleep(2000).then(() => {
        console.log("Updated the token!");
        setSelectedToken(null);
      });
    }
  }, [selectedToken]);

  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.TokensContainer>
          <Styled.Title>Tokens</Styled.Title>

          <Styled.TokensWrapper>
            {tokens.map((item) => (
              <Token
                key={item.id}
                token={item}
                isLoading={selectedToken && selectedToken.id === item.id}
              />
            ))}
          </Styled.TokensWrapper>
        </Styled.TokensContainer>
        <Styled.Separator />
        <Styled.Content>
          <Styled.BuyAssetsContainer>
            <Styled.Header>
              <Styled.Group>
                <Styled.Title>Assets to Buy</Styled.Title>
                <Search />
              </Styled.Group>
              <FilterButton onClick={handleFilterButtonClick}>
                Filter
              </FilterButton>
            </Styled.Header>
            <Styled.AssetContainer>
              <Carousel
                swipeable={true}
                draggable={false}
                infinite={false}
                keyBoardControl={true}
                responsive={carouselBreakpoints}
                autoPlay={true}
                removeArrowOnDeviceType={["tabletSmall"]}
                itemClass="carousel-item-margin"
              >
                {assets.map((item) => (
                  <Asset
                    key={item.id}
                    asset={item}
                    onClick={handleNonOwnAssetClick}
                    dropEndHandler={dropEndHandler}
                  />
                ))}
              </Carousel>
            </Styled.AssetContainer>
          </Styled.BuyAssetsContainer>
          <Styled.OwnAssetsContainer>
            <Styled.Header>
              <Styled.Group>
                <Styled.Title>My Assets</Styled.Title>
                <Search />
              </Styled.Group>
              <Styled.Group>
                <SwitchButton label="Show assets of current token" />
                <FilterButton onClick={handleFilterButtonClick}>
                  Filter
                </FilterButton>
              </Styled.Group>
            </Styled.Header>
            <Styled.AssetContainer>
              <Carousel
                swipeable={true}
                draggable={false}
                infinite={false}
                keyBoardControl={true}
                responsive={carouselBreakpoints}
                autoPlay={true}
                removeArrowOnDeviceType={["tabletSmall"]}
                itemClass="carousel-item-margin"
              >
                {assets.map((item) => (
                  <Asset
                    key={item.id}
                    asset={item}
                    onClick={handleOwnAssetClick}
                    dropEndHandler={dropEndHandler}
                  />
                ))}
              </Carousel>
            </Styled.AssetContainer>
          </Styled.OwnAssetsContainer>
        </Styled.Content>
      </Styled.Main>
    </Styled.Container>
  );
};

export default MarketplaceDesktop;
