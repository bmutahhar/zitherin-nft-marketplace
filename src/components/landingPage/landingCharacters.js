import React from "react";
import { SectionTwo } from "./sections";
import { HeroContainer, HeroTitleMedium } from "./hero";
import {
  CharactersContainer,
  ShadowWrapper,
  CardWrapper,
  Card,
  Character,
  CharacterImg,
  CardTitleContainer,
  CardTitle,
  CardSubtitle,
  CardButton,
} from "./characterCards";
import Character1 from "../../assets/characters/Character-1.png";
import Character2 from "../../assets/characters/Character-2.png";
import Character3 from "../../assets/characters/Character-3.png";
import Character4 from "../../assets/characters/Character-4.png";

const LandingCharacters = () => {
  return (
    <SectionTwo>
      <HeroContainer>
        <HeroTitleMedium>
          Zitherin is an adventure RPG <br /> where players control every aspect
          <br /> of their hero.
        </HeroTitleMedium>
      </HeroContainer>
      <CharactersContainer>
        <ShadowWrapper>
          <CardWrapper color="yellow">
            <Card color="yellow">
              <Character>
                <CharacterImg src={Character1} />
              </Character>
              <CardTitleContainer color="yellow">
                <CardTitle>Cluster</CardTitle>
              </CardTitleContainer>
              <CardButton>1.450 ETH</CardButton>
            </Card>
          </CardWrapper>
        </ShadowWrapper>
        <ShadowWrapper>
          <CardWrapper color="blue">
            <Card color="blue">
              <Character>
                <CharacterImg src={Character2} />
              </Character>
              <CardTitleContainer color="blue">
                <CardSubtitle>CAVALRY GENERAL</CardSubtitle>
                <CardTitle>Cluster</CardTitle>
              </CardTitleContainer>
              <CardButton>1.450 ETH</CardButton>
            </Card>
          </CardWrapper>
        </ShadowWrapper>
        <CardWrapper>
          <CharacterImg src={Character1} />
        </CardWrapper>
      </CharactersContainer>
    </SectionTwo>
  );
};

export default LandingCharacters;
