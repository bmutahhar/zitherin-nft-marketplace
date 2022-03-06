import styled from "styled-components";

export const BgImageContainer = styled.div`
  position: relative;
  /* border: 2px solid cyan; */
  width: 100%;
`;

export const BgImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: -1;
`;

export const Overlay = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

export const Space = styled.div`
  width: 80%;
  min-height: 100px;
  /* border: 2px solid white; */
  transform: rotate(-17deg);
  /* visibility:hidden; */
`;

export const RoadmapContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  /* border: 2px solid red; */
  width: 85%;
  position: absolute;
  top: 20%;
  transform: rotate(-17deg);
  margin-bottom: 3rem;

  @media only screen and (min-width: 1920px) {
    top: 30%;
  }
`;

export const BulletsContainer = styled.div`
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BulletsImg = styled.img`
  width: 80%;
  /* border: 1px solid pink; */
`;

export const RoadmapItems = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  /* border: 2px solid white; */
  width: 100%;
  @media only screen and (min-width: 1920px) {
    justify-content: space-around;
  }
`;

export const RoadMapItem = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1.75rem;
  /* border: 1px solid orange; */
  width: 150px;
  transform: rotate(17deg);
  @media only screen and (min-width: 1920px) {
    width: 200px;
    left: 2rem;
  }

  @media only screen and (max-width: 1200px) {
    width: 100px;
    left: 1.5rem;
  }
`;

export const RoadmapBar = styled.div`
  width: 0.5rem;
  height: 6rem;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff00 100%);
  @media only screen and (min-width: 1920px) {
    width: 0.75rem;
    height: 8rem;
  }

  @media only screen and (max-width: 1200px) {
    height: 5rem;
  }
`;

export const RoadmapText = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid cyan; */
  margin-left: 0.5rem;
  margin-top: 0.25rem;
  width: 100%;
`;

export const RoadmapTitle = styled.h5`
  color: white;
  font-weight: 700;
  font-size: 1rem;
  text-align: left;
  @media only screen and (min-width: 1920px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;

export const RoadmapSubtitle = styled.p`
  color: #e250e5;
  font-weight: 700;
  font-size: 1rem;
  text-align: left;
  @media only screen and (min-width: 1920px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;

export const Bullet = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  padding: 6px;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InnerCircle = styled.div`
  border-radius: 50%;
  background: white;
  width: 90%;
  height: 90%;
`;

export const Curve = styled.div`
  width: 12.25vw;
  height: 50px;
  /* border: solid 4px #ed2a54;
  border-color: #ed2a54 transparent transparent transparent; */
  border: solid 4px hsl(347, ${({ color }) => `${color}%`}, 55%);
  border-color: hsl(347, ${({ color }) => `${color}%`}, 55%) transparent
    transparent transparent;
  border-radius: 80%/50px 50px 0 0;
  position: absolute;
  left: 10px;
  z-index: -1;

  @media only screen and (max-width: 1200px) {
    width: 12.75vw;
  }

  @media only screen and (max-width: 925px) {
    width: 12.8vw;
  }
`;
