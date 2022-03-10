import React, { useState } from "react";
import * as Styled from "./styled.components";
import { PlainButton } from "../../components";
import { icons } from "../../utils/constants/icons";
import { useMediaQuery } from "react-responsive";

const MintNonModal = (props) => {
  const [counter, setCounter] = useState(1);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <Styled.Container>
      <Styled.NonModalWrapper>
        <Styled.ModalHeader>
          {!isMobileOrTablet && (
            <Styled.ActionButton onClick={props.closeHandler}>
              <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
              Go back
            </Styled.ActionButton>
          )}
          <Styled.TabHeader>
            {isMobileOrTablet && (
              <Styled.ActionIcon onClick={props.closeHandler}>
                {icons.arrowLeft}
              </Styled.ActionIcon>
            )}
            <Styled.TabHeaderText>Asset Details</Styled.TabHeaderText>
          </Styled.TabHeader>
        </Styled.ModalHeader>
        <Styled.Body>
          <Styled.AssetTitleContainer>
            <Styled.AssetSubTitle>Mint</Styled.AssetSubTitle>
            <Styled.AssetTitle>1 Hero = 1 Matic</Styled.AssetTitle>
          </Styled.AssetTitleContainer>

          <Styled.IncrementContainer>
            <Styled.IncrementIcon onClick={decrement}>
              {icons.minus}
            </Styled.IncrementIcon>
            <Styled.IncrementCounter>{counter}</Styled.IncrementCounter>
            <Styled.IncrementIcon onClick={increment}>
              {icons.plus}
            </Styled.IncrementIcon>
          </Styled.IncrementContainer>
          <Styled.AssetTitleContainer>
            <Styled.AssetTitle>Total = 3 Matic</Styled.AssetTitle>
          </Styled.AssetTitleContainer>
          <PlainButton>Buy Now</PlainButton>
        </Styled.Body>
      </Styled.NonModalWrapper>
    </Styled.Container>
  );
};

export default MintNonModal;
