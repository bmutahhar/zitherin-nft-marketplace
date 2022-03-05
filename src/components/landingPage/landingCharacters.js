import React from "react";
import * as Styled from "./styles";
import { charactersData } from "../../utils/constants/characters";

const LandingCharacters = () => {
  return (
    <Styled.SectionTwo>
      <Styled.HeroContainerTwo>
        <Styled.HeroTitleMedium>
          Zitherin is an adventure RPG <br /> where players control every aspect
          <br /> of their hero.
        </Styled.HeroTitleMedium>
      </Styled.HeroContainerTwo>
      <Styled.CharactersContainer>
        {charactersData.map((item) => (
          <Styled.Column key={item.id} position={item.position}>
            <Styled.ShadowWrapper>
              <Styled.CardWrapper color={item.color}>
                <Styled.Card color={item.color}>
                  <Styled.Character>
                    <Styled.CharacterImg src={item.character} />
                  </Styled.Character>
                  <Styled.CardContent color={item.color}>
                    {item.subtitle && (
                      <Styled.CardSubtitle>{item.subtitle}</Styled.CardSubtitle>
                    )}
                    <Styled.CardTitle>{item.title}</Styled.CardTitle>
                    <Styled.CardButton>{item.price} ETH</Styled.CardButton>
                  </Styled.CardContent>
                </Styled.Card>
              </Styled.CardWrapper>
            </Styled.ShadowWrapper>
          </Styled.Column>
        ))}
      </Styled.CharactersContainer>
    </Styled.SectionTwo>
  );
};

export default LandingCharacters;
