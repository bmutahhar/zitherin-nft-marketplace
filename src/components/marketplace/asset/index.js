import React from "react";
import * as Styled from "./styled.components";
import { backgroundImages } from "../../../utils/constants/images";
import { icons } from "../../../utils/constants/icons";

const Asset = ({ asset, onClick }) => {
  return (
    <Styled.AssetWrapper key={asset.id} onClick={() => onClick(asset)}>
      <Styled.AssetCard>
        <Styled.Asset>
          <Styled.AssetImg src={asset.image} />
        </Styled.Asset>
        <Styled.AssetOverlay>
          <Styled.AssetOverlayImg src={backgroundImages.tokenOverly} />
        </Styled.AssetOverlay>
        <Styled.AssetName>{asset.name}</Styled.AssetName>
      </Styled.AssetCard>
      <Styled.AssetDetails>
        <Styled.DetailsRow>
          <Styled.FieldName>{asset.battle}</Styled.FieldName>
          <Styled.Bids>{asset.bids.length} Bids</Styled.Bids>
        </Styled.DetailsRow>
        <Styled.DetailsRow>
          <Styled.FieldName>Price</Styled.FieldName>
          <Styled.Price>
            <Styled.EthIcon>{icons.eth}</Styled.EthIcon>
            {asset.price} ETH
          </Styled.Price>
        </Styled.DetailsRow>
        <Styled.DetailsRow end={1}>
          <Styled.UsdPrice>${asset.usd} USD</Styled.UsdPrice>
        </Styled.DetailsRow>
      </Styled.AssetDetails>
    </Styled.AssetWrapper>
  );
};

export default Asset;
