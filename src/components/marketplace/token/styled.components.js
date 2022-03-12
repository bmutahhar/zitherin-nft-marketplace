import styled from "styled-components";

export const TokenCard = styled.div`
  margin: 4rem auto;
  width: 180px;
  height: 220px;
  position: relative;
  z-index: 0;
  transition: 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1b1444;
    clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);
    ${({ isLoading }) => (isLoading ? "display:none;" : "")}
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media only screen and (min-width: 1920px) {
    width: 220px;
    height: 260px;
    margin: 6rem auto;
  }

  @media only screen and (max-width: 1200px) {
    width: 160px;
    height: 200px;
  }

  @media only screen and (max-width: 900px) {
    width: 140px;
    height: 180px;
  }

  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 160px;
  }
`;

export const Character = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
`;

export const CharacterImg = styled.img`
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
`;

export const OverlayImg = styled.img`
  width: 100%;
`;
