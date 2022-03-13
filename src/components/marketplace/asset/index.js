import React from "react";
import { useDrag } from "react-dnd";
import Skeleton from "react-loading-skeleton";
import * as Styled from "./styled.components";
import { backgroundImages } from "../../../utils/constants/images";
import { icons } from "../../../utils/constants/icons";

const Asset = ({ asset, onClick, dropEndHandler, isLoading }) => {
  const [collected, drag] = useDrag(() => ({
    type: "ASSET",
    item: { id: asset ? asset.id : null, image: asset ? asset.image : null },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    end: dropEndHandler,
  }));

  if (isLoading) {
    console.log("Mutahhar");
    return (
      <Styled.AssetLoader className="Mutahhar">
        <Skeleton
          height={"100%"}
          highlightColor={"#3b2a8b"}
          baseColor={"#1b1444"}
        />
      </Styled.AssetLoader>
    );
  }
  return (
    <Styled.AssetWrapper
      ref={drag}
      {...collected}
      onClick={() => onClick(asset)}
      style={{
        transform: collected.isDragging ? "scale(0.9)" : "none",
        opacity: collected.isDragging ? 0.5 : 1,
      }}
    >
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
      </Styled.AssetDetails>
    </Styled.AssetWrapper>
  );
};

export default Asset;
