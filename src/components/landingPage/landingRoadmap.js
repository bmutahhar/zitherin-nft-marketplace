import React from "react";
import * as Styled from "./styles";
import { backgroundImages } from "../../utils/constants/images";
import { Roadmap } from "../../components";

const LandingRoadmap = () => {
  return (
    <Styled.SectionThree>
      <Styled.HeroContainerTwo>
        <Styled.HeroTitleMedium>Roadmap</Styled.HeroTitleMedium>
      </Styled.HeroContainerTwo>
      <Styled.RoadmapContainer>
        <Styled.RoadmapItems>
          <Styled.RoadMapItem top={55} left={10}>
            <Styled.RoadmapBar />
            <Styled.RoadmapText>
              <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
              <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
            </Styled.RoadmapText>
          </Styled.RoadMapItem>
          <Styled.RoadMapItem top={50} left={20}>
            <Styled.RoadmapBar />
            <Styled.RoadmapText>
              <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
              <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
            </Styled.RoadmapText>
          </Styled.RoadMapItem>
          <Styled.RoadMapItem top={45} left={31}>
            <Styled.RoadmapBar />
            <Styled.RoadmapText>
              <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
              <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
            </Styled.RoadmapText>
          </Styled.RoadMapItem>
          <Styled.RoadMapItem top={40} left={41}>
            <Styled.RoadmapBar />
            <Styled.RoadmapText>
              <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
              <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
            </Styled.RoadmapText>
          </Styled.RoadMapItem>
          <Styled.RoadMapItem top={35} left={51.5}>
            <Styled.RoadmapBar />
            <Styled.RoadmapText>
              <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
              <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
            </Styled.RoadmapText>
          </Styled.RoadMapItem>
          <Styled.RoadMapItem top={30} left={62}>
            <Styled.RoadmapBar />
            <Styled.RoadmapText>
              <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
              <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
            </Styled.RoadmapText>
          </Styled.RoadMapItem>
          <Styled.RoadMapItem top={25} left={72.5}>
            <Styled.RoadmapBar />
            <Styled.RoadmapText>
              <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
              <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
            </Styled.RoadmapText>
          </Styled.RoadMapItem>
        </Styled.RoadmapItems>

        <Styled.BulletsContainer>
          <Styled.Bullet left={0}>
            <Styled.InnerCircle />
            <Styled.Curve />
          </Styled.Bullet>
          <Styled.Bullet left={8}>
            <Styled.InnerCircle />
            <Styled.Curve />
          </Styled.Bullet>
          <Styled.Bullet left={16}>
            <Styled.InnerCircle />
            <Styled.Curve />
          </Styled.Bullet>
          <Styled.Bullet left={24}>
            <Styled.InnerCircle />
            <Styled.Curve />
          </Styled.Bullet>
          <Styled.Bullet left={32}>
            <Styled.InnerCircle />
            <Styled.Curve />
          </Styled.Bullet>
          <Styled.Bullet left={40}>
            <Styled.InnerCircle />
            <Styled.Curve />
          </Styled.Bullet>
          <Styled.Bullet left={48}>
            <Styled.InnerCircle />
            <Styled.Curve />
          </Styled.Bullet>
          <Styled.Bullet left={56}>
            <Styled.InnerCircle />
          </Styled.Bullet>
        </Styled.BulletsContainer>
      </Styled.RoadmapContainer>

      {/* <Styled.RoadmapItems>
        <Styled.RoadMapItem top={55} left={10}>
          <Styled.RoadmapBar />
          <Styled.RoadmapText>
            <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
            <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
          </Styled.RoadmapText>
        </Styled.RoadMapItem>
        <Styled.RoadMapItem top={50} left={20}> 
          <Styled.RoadmapBar />
          <Styled.RoadmapText>
            <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
            <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
          </Styled.RoadmapText>
        </Styled.RoadMapItem>
        <Styled.RoadMapItem top={45} left={31}>
          <Styled.RoadmapBar />
          <Styled.RoadmapText>
            <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
            <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
          </Styled.RoadmapText>
        </Styled.RoadMapItem>
        <Styled.RoadMapItem top={40} left={41}>
          <Styled.RoadmapBar />
          <Styled.RoadmapText>
            <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
            <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
          </Styled.RoadmapText>
        </Styled.RoadMapItem>
        <Styled.RoadMapItem top={35} left={51.5}>
          <Styled.RoadmapBar />
          <Styled.RoadmapText>
            <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
            <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
          </Styled.RoadmapText>
        </Styled.RoadMapItem>
        <Styled.RoadMapItem top={30} left={62}>
          <Styled.RoadmapBar />
          <Styled.RoadmapText>
            <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
            <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
          </Styled.RoadmapText>
        </Styled.RoadMapItem>
        <Styled.RoadMapItem top={25} left={72.5}>
          <Styled.RoadmapBar />
          <Styled.RoadmapText>
            <Styled.RoadmapTitle>Lorem Ipsum</Styled.RoadmapTitle>
            <Styled.RoadmapSubtitle>Milestone 1</Styled.RoadmapSubtitle>
          </Styled.RoadmapText>
        </Styled.RoadMapItem> 
      </Styled.RoadmapItems> */}

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
