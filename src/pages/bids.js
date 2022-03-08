import React from "react";
import { ModalLayout, TraitMiniCard } from "../components";
import * as Styled from "../components/modal/styles";
import { backgroundImages } from "../utils/constants/images";

const Bids = () => {
  return (
    <ModalLayout>
      <Styled.AssetImgPortion>
        <Styled.AssetImgContainer>
          <Styled.AssetImg src={backgroundImages.mask} />
        </Styled.AssetImgContainer>
      </Styled.AssetImgPortion>
      <Styled.AssetDetailsPortion>
        <Styled.AssetHeader>
          <Styled.AssetTitleContainer>
            <Styled.AssetSubTitle>ASSET NAME</Styled.AssetSubTitle>
            <Styled.AssetTitle>ASSET NAME</Styled.AssetTitle>
          </Styled.AssetTitleContainer>
          <Styled.TraitContainer>
            <TraitMiniCard
              traitName="Hero"
              traitValue="Common"
              bgColor="#466bf7"
              traitValueColor="#1B2960"
            />
            <TraitMiniCard
              traitName="Skin"
              traitValue="Normal"
              bgColor="#00C5E2"
              traitValueColor="#005E84"
            />
          </Styled.TraitContainer>
        </Styled.AssetHeader>

        <Styled.AssetDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Styled.AssetDescription>

        <Styled.BidsPriceContainer></Styled.BidsPriceContainer>
      </Styled.AssetDetailsPortion>
    </ModalLayout>
  );
};

export default Bids;
