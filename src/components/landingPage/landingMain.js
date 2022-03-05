import React from "react";
import { SectionOne } from "./sections";
import { PolygonButton } from "../../components";
import { HeroContainer, HeroTitleLarge, HeroContent, HeroButton } from "./hero";
import { StatsContainer, StatsCard, StatsNumber, StatsText } from "./stats";
import { statsData } from "../../utils/constants/stats";

const LandingMain = () => {
  return (
    <SectionOne>
      <HeroContainer>
        <HeroTitleLarge>Welcome to Zitherin</HeroTitleLarge>
        <HeroContent>
          An RPG adventure game built on blockchain, using completely on-chain
          assets
        </HeroContent>
        <HeroButton>
          <PolygonButton>Trade Now</PolygonButton>
        </HeroButton>
      </HeroContainer>
      <StatsContainer>
        {statsData.map((item) => (
          <StatsCard key={item.id}>
            <StatsNumber>{item.number}</StatsNumber>
            <StatsText>{item.text}</StatsText>
          </StatsCard>
        ))}
      </StatsContainer>
    </SectionOne>
  );
};

export default LandingMain;
