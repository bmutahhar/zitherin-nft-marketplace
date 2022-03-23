import React from "react";
import { useDrop } from "react-dnd";
import * as Styled from "./styled.components";
import { backgroundImages } from "../../../utils/constants/images";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Token = ({ token, isLoading }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "ASSET",
    // Props to collect
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
      };
    },
    drop: () => {
      return { token };
    },
  }));

  if (isLoading) {
    console.log("loading");
    return (
      <Styled.TokenLoadingCard isLoading={isLoading}>
        <Skeleton
          height={"100%"}
          highlightColor={"#3b2a8b"}
          baseColor={"#1b1444"}
          enableAnimation={true}
        />
      </Styled.TokenLoadingCard>
    );
  }
  return (
    <Styled.TokenCard
      ref={drop}
      style={{
        opacity: isOver ? 0.4 : 1,
        transform: isOver ? "scale(1.05)" : "none",
      }}
    >
      <Styled.Character>
        <Styled.CharacterImg src={token.image} />
      </Styled.Character>
      <Styled.Overlay>
        <Styled.OverlayImg src={backgroundImages.tokenOverly} />
      </Styled.Overlay>
    </Styled.TokenCard>
  );
};

export default Token;
