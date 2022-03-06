import React from "react";
import * as Styled from "./styles";
import { backgroundImages } from "../../utils/constants/images";
import { roadmapData } from "../../utils/constants/roadmap";

const LandingRoadmap = () => {
  const startingCurveColorValue = 85;
  return (
    <Styled.SectionThree>
      <Styled.HeroContainerTwo>
        <Styled.HeroTitleMedium>Roadmap</Styled.HeroTitleMedium>
      </Styled.HeroContainerTwo>
      <Styled.RoadmapContainer>
        <Styled.BulletsContainer>
          {roadmapData.map((item, index) => (
            <Styled.Bullet key={item.id}>
              <Styled.InnerCircle />
              <Styled.Curve color={startingCurveColorValue - index * 5} />
              <Styled.RoadMapItem>
                <Styled.RoadmapBar />
                <Styled.RoadmapText>
                  <Styled.RoadmapTitle>{item.title}</Styled.RoadmapTitle>
                  <Styled.RoadmapSubtitle>
                    {item.subtitle}
                  </Styled.RoadmapSubtitle>
                </Styled.RoadmapText>
              </Styled.RoadMapItem>
            </Styled.Bullet>
          ))}
          <Styled.Bullet>
            <Styled.InnerCircle />
          </Styled.Bullet>
        </Styled.BulletsContainer>
      </Styled.RoadmapContainer>

      <Styled.Space />
      <Styled.BgImageContainer>
        {/* <Styled.BulletsContainer>
          <Styled.BulletsImg src={backgroundImages.bullets} />
        </Styled.BulletsContainer> */}
        <Styled.BgImage src={backgroundImages.clouds} />
        <Styled.Overlay src={backgroundImages.bgOverlay} />
      </Styled.BgImageContainer>
    </Styled.SectionThree>
  );
};

export default LandingRoadmap;
