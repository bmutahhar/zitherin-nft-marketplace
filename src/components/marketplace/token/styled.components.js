import styled from "styled-components";

export const TokenCard = styled.div`
  margin: 4rem auto;
  width: 180px;
  height: 220px;
  transition: 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #1b1444;
  clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);

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

export const TokenLoadingCard = styled(TokenCard)`
  display: block;
  position: initial;
  clip-path: none;
  background:transparent;
  `;

export const Character = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const CharacterImg = styled.img`
  max-width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
`;

export const OverlayImg = styled.img`
  width: 100%;
`;
