import styled from "styled-components";

export const AssetWrapper = styled.div`
  user-select: none;
  min-width: 240px;
  height: 280px;
  margin: 0 1rem;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 1920px) {
    min-width: 300px;
    height: 340px;
  }

  @media only screen and (max-width: 900px) {
    min-width: 220px;
    height: 260px;
  }

  @media only screen and (max-width: 768px) {
    min-width: 200px;
    width: 200px;
    height: 240px;
    &:hover {
      transform: none;
    }
  }

  @media only screen and (max-width: 500px) {
    min-width: 160px;
    width: 160px;
    height: 200px;
    margin: 0;
  }
  @media only screen and (max-width: 400px) {
    min-width: 200px;
    width: 200px;
    height: 240px;
    margin: 0;
  }
`;

export const AssetCard = styled.div`
  margin: inherit;
  user-select: none;
  width: 100%;
  height: 70%;
  margin: 0 1rem;
  position: relative;
  z-index: 0;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b1444;
  clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);

  /* &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1b1444;
    clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);
  } */

  @media only screen and (max-width: 768px) {
    height: 60%;
  }
`;

export const Asset = styled.div`
  /* position: absolute;
  user-select: none;
  top: -10px;
  left: 0;
  right: 0;
  @media only screen and (max-width: 768px) {
    top: 0;
  } */
`;

export const AssetImg = styled.img`
  height: 100%;
  user-select: none;
  @media only screen and (max-width: 768px) {
    height: 100px;
  }

  @media only screen and (max-width: 400px) {
    height: 150px;
  }
`;

export const AssetOverlay = styled.div`
  position: absolute;
  user-select: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const AssetOverlayImg = styled.img`
  height: 100%;
  width: 100%;
  user-select: none;
`;

export const AssetDetails = styled.div`
  user-select: none;
  width: 100%;
  height: 30%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: #1b1444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 5;

  @media only screen and (max-width: 768px) {
    height: 40%;
  }
`;

export const DetailsRow = styled.div`
  width: 100%;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: ${({ end }) => (end ? `flex-end` : `space-between`)};
`;

export const FieldName = styled.span`
  color: white;
  user-select: none;
  font-size: 0.875rem;
  @media only screen and (max-width: 500px) {
    font-size: 0.675rem;
  }
`;

export const Bids = styled.span`
  color: #0dc900;
  font-size: 0.875rem;
  user-select: none;
  @media only screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const EthIcon = styled.span`
  display: inline-flex;
  width: 20px;
  user-select: none;
  margin-right: 10px;
  @media only screen and (max-width: 500px) {
    margin-right: 5px;
    width: 12px;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  color: #537fee;
  font-size: 0.875rem;
  user-select: none;
  @media only screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const UsdPrice = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.625rem;
  user-select: none;
  @media only screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const AssetName = styled.span`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #ff94d5;
  padding-left: 1rem;
  border-left: 5px solid #ff94d5;
  user-select: none;
  @media only screen and (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const AssetLoader = styled.div`
  min-width: 240px;
  height: 280px;
  margin: 1rem;
  @media only screen and (min-width: 1920px) {
    min-width: 300px;
    height: 340px;
  }

  @media only screen and (max-width: 900px) {
    min-width: 220px;
    height: 260px;
  }

  @media only screen and (max-width: 768px) {
    min-width: 200px;
    width: 200px;
    height: 240px;
    &:hover {
      transform: none;
    }
  }

  @media only screen and (max-width: 500px) {
    min-width: 160px;
    width: 160px;
    height: 200px;
    margin: 0;
  }
  @media only screen and (max-width: 400px) {
    min-width: 200px;
    width: 200px;
    height: 240px;
    margin: 0;
  }
`;
