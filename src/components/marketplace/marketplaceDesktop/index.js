import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as Styled from "../styles";
import {
  Footer,
  Search,
  FilterButton,
  SwitchButton,
  Asset,
  OwnAssetModal
} from "../../../components";
import { assets, tokens } from "../../../mock";
import { backgroundImages } from "../../../utils/constants/images";

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

export const MarketplaceDesktop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleOwnAssetClick = (item) => {
    if (!modalData) {
      setModalData(item);
      setIsModalOpen(true);
      console.log(item);
    }
  };

  return (
    <>
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
                    <Styled.OverlayImg src={backgroundImages.tokenOverly} />
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
                  removeArrowOnDeviceType={["tabletSmall"]}
                  itemClass="carousel-item-margin"
                >
                  {assets.map((item) => (
                    <Asset
                      key={item.id}
                      asset={item}
                      onClick={() => handleOwnAssetClick(item)}
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
                  removeArrowOnDeviceType={["tabletSmall"]}
                  itemClass="carousel-item-margin"
                >
                  {assets.map((item) => (
                    <Asset
                      key={item.id}
                      asset={item}
                      onClick={() => handleOwnAssetClick(item)}
                    />
                  ))}
                </Carousel>
              </Styled.AssetContainer>
            </Styled.OwnAssetsContainer>
          </Styled.Content>
        </Styled.Main>
        <Footer />
      </Styled.Container>
      <OwnAssetModal
        isOpen={isModalOpen}
        closeHandler={closeModal}
        modalData={modalData}
      />
    </>
  );
};

export default MarketplaceDesktop;
