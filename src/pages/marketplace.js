import React from "react";
import * as Styled from "../components/marketplace";
import { Footer, Search, FilterButton, SwitchButton } from "../components";
import { icons } from "../utils/constants/icons";
import character1 from "../assets/characters/Character-1.png";
import character2 from "../assets/characters/Character-2.png";
import character3 from "../assets/characters/Character-3.png";
import character4 from "../assets/characters/Character-4.png";
import character5 from "../assets/characters/Character-5.png";
import overlay from "../assets/images/token-overlay.png";
import mask from "../assets/images/mask.png";
import axe from "../assets/images/axe.png";
import boots from "../assets/images/boots.png";
import gloves from "../assets/images/gloves.png";
import pants from "../assets/images/pants.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Marketplace = () => {
  const tokens = [
    { id: 1, token: character1 },
    { id: 2, token: character2 },
    { id: 3, token: character3 },
    { id: 4, token: character4 },
    { id: 5, token: character5 },
  ];

  const assets = [
    {
      id: 1,
      asset: mask,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 2,
      asset: axe,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 3,
      asset: boots,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 4,
      asset: pants,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 5,
      asset: gloves,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 6,
      asset: pants,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 7,
      asset: gloves,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 8,
      asset: boots,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 9,
      asset: pants,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 10,
      asset: gloves,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 11,
      asset: pants,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
    {
      id: 12,
      asset: gloves,
      name: "Asset Name",
      price: "4.000",
      usd: 0.43,
      bids: 10,
      battle: "gTHC battle",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1920 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1920, min: 1440 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptopMedium: {
      breakpoint: { max: 1440, min: 1150 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1150, min: 850 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tabletSmall: {
      breakpoint: { max: 850, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.TokensContainer>
          <Styled.Title>Tokens</Styled.Title>
          <Styled.TokensWrapper>
            {tokens.map((item) => (
              <Styled.TokenCard key={item.id}>
                <Styled.Character>
                  <Styled.CharacterImg src={item.token} />
                </Styled.Character>
                <Styled.Overlay>
                  <Styled.OverlayImg src={overlay} />
                </Styled.Overlay>
              </Styled.TokenCard>
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
              <FilterButton>Filter</FilterButton>
            </Styled.Header>
            <Styled.AssetContainer>
              <Carousel
                swipeable={true}
                draggable={true}
                infinite={false}
                keyBoardControl={true}
                responsive={responsive}
                autoPlay={true}
                arrows={false}
                itemClass="carousel-item-margin"
              >
                {/* <Styled.AssetContainerWrapper> */}
                {assets.map((item) => (
                  <Styled.AssetWrapper key={item.id}>
                    <Styled.AssetCard>
                      <Styled.Asset>
                        <Styled.AssetImg src={item.asset} />
                      </Styled.Asset>
                      <Styled.AssetOverlay>
                        <Styled.AssetOverlayImg src={overlay} />
                      </Styled.AssetOverlay>
                      <Styled.AssetName>{item.name}</Styled.AssetName>
                    </Styled.AssetCard>
                    <Styled.AssetDetails>
                      <Styled.DetailsRow>
                        <Styled.FieldName>{item.battle}</Styled.FieldName>
                        <Styled.Bids>{item.bids} Bids</Styled.Bids>
                      </Styled.DetailsRow>
                      <Styled.DetailsRow>
                        <Styled.FieldName>Price</Styled.FieldName>
                        <Styled.Price>
                          <Styled.EthIcon>{icons.eth}</Styled.EthIcon>
                          {item.price} ETH
                        </Styled.Price>
                      </Styled.DetailsRow>
                      <Styled.DetailsRow end={1}>
                        <Styled.UsdPrice>${item.usd} USD</Styled.UsdPrice>
                      </Styled.DetailsRow>
                    </Styled.AssetDetails>
                  </Styled.AssetWrapper>
                ))}
                {/* </Styled.AssetContainerWrapper> */}
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
                <FilterButton>Filter</FilterButton>
              </Styled.Group>
            </Styled.Header>
            <Styled.AssetContainer>
              <Carousel
                swipeable={true}
                draggable={true}
                infinite={false}
                keyBoardControl={true}
                responsive={responsive}
                autoPlay={true}
                arrows={false}
                itemClass="carousel-item-margin"
              >
                {/* <Styled.AssetContainerWrapper> */}
                {assets.map((item) => (
                  <Styled.AssetWrapper key={item.id}>
                    <Styled.AssetCard>
                      <Styled.Asset>
                        <Styled.AssetImg src={item.asset} />
                      </Styled.Asset>
                      <Styled.AssetOverlay>
                        <Styled.AssetOverlayImg src={overlay} />
                      </Styled.AssetOverlay>
                      <Styled.AssetName>{item.name}</Styled.AssetName>
                    </Styled.AssetCard>
                    <Styled.AssetDetails>
                      <Styled.DetailsRow>
                        <Styled.FieldName>{item.battle}</Styled.FieldName>
                        <Styled.Bids>{item.bids} Bids</Styled.Bids>
                      </Styled.DetailsRow>
                      <Styled.DetailsRow>
                        <Styled.FieldName>Price</Styled.FieldName>
                        <Styled.Price>
                          <Styled.EthIcon>{icons.eth}</Styled.EthIcon>
                          {item.price} ETH
                        </Styled.Price>
                      </Styled.DetailsRow>
                      <Styled.DetailsRow end={1}>
                        <Styled.UsdPrice>${item.usd} USD</Styled.UsdPrice>
                      </Styled.DetailsRow>
                    </Styled.AssetDetails>
                  </Styled.AssetWrapper>
                ))}
              </Carousel>
              {/* </Styled.AssetContainerWrapper> */}
            </Styled.AssetContainer>
          </Styled.OwnAssetsContainer>
        </Styled.Content>
      </Styled.Main>
      <Footer />
    </Styled.Container>
  );
};

export default Marketplace;
