import React from "react";
import * as Styled from "../components/marketplace";
import { Footer, Search, FilterButton, SwitchButton } from "../components";
import character1 from "../assets/characters/Character-1.png";
import character2 from "../assets/characters/Character-2.png";
import character3 from "../assets/characters/Character-3.png";
import character4 from "../assets/characters/Character-4.png";
import character5 from "../assets/characters/Character-5.png";
import overlay from "../assets/images/token-overlay.png";

export const Marketplace = () => {
  const tokens = [
    { id: 1, token: character1 },
    { id: 2, token: character2 },
    { id: 3, token: character3 },
    { id: 4, token: character4 },
    { id: 5, token: character5 },
  ];
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
          </Styled.BuyAssetsContainer>
          <Styled.OwnAssetsContainer>
            <Styled.Header>
              <Styled.Group>
                <Styled.Title>My Assets</Styled.Title>
                <Search />
              </Styled.Group>
              <Styled.Group end>
                <SwitchButton label="Show assets of current token" />
                <FilterButton>Filter</FilterButton>
              </Styled.Group>
            </Styled.Header>
          </Styled.OwnAssetsContainer>
        </Styled.Content>
      </Styled.Main>
      <Footer />
    </Styled.Container>
  );
};

export default Marketplace;
