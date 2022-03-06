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

export const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid red;
  width: 85%;
  position: absolute;
  top: 15%;
  transform: rotate(-15deg);

  @media only screen and (min-width: 1920px) {
    top: 30%;
  }
`;

export const BulletsContainer = styled.div`
  border: 2px solid green;
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
  border: 2px solid white;
  width: 100%;
  min-height: 200px;
  @media only screen and (min-width: 1920px) {
    justify-content: space-around;
  }
`;

export const RoadMapItem = styled.div`
  display: flex;
  margin: 0 1.25vw;
  border: 1px solid orange;
  transform: rotate(15deg) translateX(-2.2rem);

  @media only screen and (min-width: 1920px) {
    margin: 0;
    transform: rotate(15deg) translateX(-3rem);
  }
`;

export const RoadmapBar = styled.div`
  width: 0.5rem;
  height: 6rem;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff00 100%);
  @media only screen and (min-width: 1920px) {
    width: 0.75rem;
  }
`;

export const RoadmapText = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid cyan; */
  margin-left: 0.5rem;
  margin-top: 0.25rem;
`;

export const RoadmapTitle = styled.h5`
  color: white;
  font-weight: 700;
  font-size: 1rem;
  text-align: left;
  @media only screen and (min-width: 1920px) {
    font-size: 1.5rem;
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
`;

export const Bullet = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  padding: 0.25rem;
  width: 25px;
  height: 25px;
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
  width: 12.5vw;
  height: 50px;
  border: solid 4px #ed2a54;
  border-color: #ed2a54 transparent transparent transparent;
  border-radius: 80%/50px 50px 0 0;
  position: absolute;
  left: 0px;
  z-index: -1;
`;
