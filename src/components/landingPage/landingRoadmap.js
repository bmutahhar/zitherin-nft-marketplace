import React from "react";
import * as Styled from "./styles";
import { backgroundImages } from "../../utils/constants/images";
import { roadmapData } from "../../utils/constants/roadmap";

const LandingRoadmap = () => {
  return (
    <Styled.SectionThree>
      <Styled.HeroContainerTwo>
        <Styled.HeroTitleMedium>Roadmap</Styled.HeroTitleMedium>
      </Styled.HeroContainerTwo>
      <Styled.RoadmapContainer>
        <Styled.BulletsContainer>
          <Styled.Bullet>
            <Styled.InnerCircle />
            <Styled.Curve color={85} />
            <Styled.RoadMapItem>
              <Styled.RoadmapBar />
              <Styled.RoadmapText>
                <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
                <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
              </Styled.RoadmapText>
            </Styled.RoadMapItem>
          </Styled.Bullet>
          <Styled.Bullet>
            <Styled.InnerCircle />
            <Styled.Curve color={80} />
            <Styled.RoadMapItem>
              <Styled.RoadmapBar />
              <Styled.RoadmapText>
                <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
                <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
              </Styled.RoadmapText>
            </Styled.RoadMapItem>
          </Styled.Bullet>
          <Styled.Bullet>
            <Styled.InnerCircle />
            <Styled.Curve color={75} />
            <Styled.RoadMapItem>
              <Styled.RoadmapBar />
              <Styled.RoadmapText>
                <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
                <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
              </Styled.RoadmapText>
            </Styled.RoadMapItem>
          </Styled.Bullet>
          <Styled.Bullet>
            <Styled.InnerCircle />
            <Styled.Curve color={70} />
            <Styled.RoadMapItem>
              <Styled.RoadmapBar />
              <Styled.RoadmapText>
                <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
                <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
              </Styled.RoadmapText>
            </Styled.RoadMapItem>
          </Styled.Bullet>
          <Styled.Bullet>
            <Styled.InnerCircle />
            <Styled.Curve color={65} />
            <Styled.RoadMapItem>
              <Styled.RoadmapBar />
              <Styled.RoadmapText>
                <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
                <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
              </Styled.RoadmapText>
            </Styled.RoadMapItem>
          </Styled.Bullet>
          <Styled.Bullet>
            <Styled.InnerCircle />
            <Styled.Curve color={60} />
            <Styled.RoadMapItem>
              <Styled.RoadmapBar />
              <Styled.RoadmapText>
                <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
                <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
              </Styled.RoadmapText>
            </Styled.RoadMapItem>
          </Styled.Bullet>
          <Styled.Bullet>
            <Styled.InnerCircle />
            <Styled.Curve color={55} />
            <Styled.RoadMapItem>
              <Styled.RoadmapBar />
              <Styled.RoadmapText>
                <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
                <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
              </Styled.RoadmapText>
            </Styled.RoadMapItem>
          </Styled.Bullet>
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
