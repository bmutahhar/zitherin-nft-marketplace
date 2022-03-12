import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { icons } from "../../utils/constants/icons";
import { mintCharacters } from "../../mock";
import { backgroundImages } from "../../utils/constants/images";
import * as Styled from "./styled.components";

const MintNonModal = (props) => {
  const [counter, setCounter] = useState(1);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const goBack = () => navigate(-1);

  return (
    <Styled.Container>
      <Styled.NonModalWrapper>
        <Styled.ModalHeader>
          {!isMobileOrTablet && (
            <Styled.ActionButton onClick={goBack}>
              <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
              Go back
            </Styled.ActionButton>
          )}
          <Styled.TabHeader>
            {isMobileOrTablet && (
              <Styled.ActionIcon onClick={goBack}>
                {icons.arrowLeft}
              </Styled.ActionIcon>
            )}
            <Styled.TabHeaderText>Mint a Hero</Styled.TabHeaderText>
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
            <Styled.IncrementCounter>{counter} Heroes</Styled.IncrementCounter>
            <Styled.IncrementIcon onClick={increment}>
              {icons.plus}
            </Styled.IncrementIcon>
          </Styled.IncrementContainer>

          <Styled.CharacterContainer>
            {mintCharacters.map((item) => (
              <Styled.CharacterCard key={item.id}>
                <Styled.Character>
                  <Styled.CharacterImg src={item.character} />
                </Styled.Character>
                <Styled.Overlay>
                  <Styled.OverlayImg src={backgroundImages.tokenOverly} />
                </Styled.Overlay>
              </Styled.CharacterCard>
            ))}
          </Styled.CharacterContainer>

          <Styled.AssetTitleContainer>
            <Styled.AssetTitle>Total = 3 Matic</Styled.AssetTitle>
          </Styled.AssetTitleContainer>
          <Styled.MintButton>Mint</Styled.MintButton>
        </Styled.Body>
      </Styled.NonModalWrapper>
    </Styled.Container>
  );
};

export default MintNonModal;
