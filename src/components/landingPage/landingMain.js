import React from "react";
import { useMediaQuery } from "react-responsive";
import { PolygonButton } from "../../components";
import { statsData } from "../../utils/constants/stats";
import * as Styled from "./styles";

const LandingMain = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Styled.SectionOne>
      <Styled.HeroContainerOne>
        <Styled.HeroTitleLarge>Welcome to Zitherin</Styled.HeroTitleLarge>
        <Styled.HeroContent>
          An RPG adventure game built on blockchain, using completely on-chain
          assets
        </Styled.HeroContent>
        <Styled.HeroButton>
          <PolygonButton>Trade Now</PolygonButton>
        </Styled.HeroButton>
      </Styled.HeroContainerOne>
      {!isMobileOrTablet && (
        <Styled.StatsContainer>
          {statsData.map((item) => (
            <Styled.StatsCard key={item.id}>
              <Styled.StatsNumber>{item.number}</Styled.StatsNumber>
              <Styled.StatsText>{item.text}</Styled.StatsText>
            </Styled.StatsCard>
          ))}
        </Styled.StatsContainer>
      )}
    </Styled.SectionOne>
  );
};

export default LandingMain;
