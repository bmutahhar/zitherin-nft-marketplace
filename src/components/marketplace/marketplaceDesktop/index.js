import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import { carouselBreakpoints } from "../../../utils/constants/carousel";
import { sleep } from "../../../utils/helpers/misc";
import character6 from "../../../assets/characters/Character-6.png";
import "react-loading-skeleton/dist/skeleton.css";

export const MarketplaceDesktop = ({
  isLoading,
  tokens,
  ownAssetData,
  nonOwnAssetData,
  selectedToken,
  setSelectedToken,
}) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [selectedToken, setSelectedToken] = useState(null);
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

  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.TokensContainer>
          <Styled.Title>Tokens</Styled.Title>
          {isLoading && (
            <Styled.TokensWrapper>
              {[1, 2, 3, 4, 5].map((item) => (
                <Token key={item} isLoading={isLoading} />
              ))}
            </Styled.TokensWrapper>
          )}

          {!isLoading && (
            <Styled.TokensWrapper>
              {tokens.map((item) => (
                <Token
                  key={item.id}
                  token={item}
                  isLoading={selectedToken && selectedToken.id === item.id}
                />
              ))}
            </Styled.TokensWrapper>
          )}
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
            {isLoading && (
              <Styled.LoadingAssetContainer>
                {[1, 2, 3, 4].map((key) => (
                  <Asset key={key} isLoading={isLoading} />
                ))}
              </Styled.LoadingAssetContainer>
            )}
            {!isLoading && (
              <Styled.AssetContainer>
                <Carousel
                  swipeable={true}
                  draggable={false}
                  infinite={false}
                  keyBoardControl={true}
                  responsive={carouselBreakpoints}
                  autoPlay={false}
                  removeArrowOnDeviceType={["tabletSmall"]}
                  itemClass="carousel-item-margin"
                >
                  {nonOwnAssetData.map((item) => (
                    <Asset
                      key={item.id}
                      asset={item}
                      onClick={handleNonOwnAssetClick}
                      dropEndHandler={dropEndHandler}
                    />
                  ))}
                </Carousel>
              </Styled.AssetContainer>
            )}
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
            {isLoading && (
              <Styled.LoadingAssetContainer>
                {[1, 2, 3, 4].map((key) => (
                  <Asset key={key} isLoading={isLoading} />
                ))}
              </Styled.LoadingAssetContainer>
            )}
            {!isLoading && (
              <Styled.AssetContainer>
                <Carousel
                  swipeable={true}
                  draggable={false}
                  infinite={false}
                  keyBoardControl={true}
                  responsive={carouselBreakpoints}
                  autoPlay={false}
                  removeArrowOnDeviceType={["tabletSmall"]}
                  itemClass="carousel-item-margin"
                >
                  {ownAssetData.map((item) => (
                    <Asset
                      key={item.id}
                      asset={item}
                      onClick={handleOwnAssetClick}
                      dropEndHandler={dropEndHandler}
                    />
                  ))}
                </Carousel>
              </Styled.AssetContainer>
            )}
          </Styled.OwnAssetsContainer>
        </Styled.Content>
      </Styled.Main>
    </Styled.Container>
  );
};

export default MarketplaceDesktop;
