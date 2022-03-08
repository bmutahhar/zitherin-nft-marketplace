import React from "react";
import { ModalLayout } from "../components";
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
            <Styled.Trait></Styled.Trait>
          </Styled.TraitContainer>
        </Styled.AssetHeader>
      </Styled.AssetDetailsPortion>
    </ModalLayout>
  );
};

export default Bids;
