import styled from "styled-components";

export const CharactersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShadowWrapper = styled.div`
  margin: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 9px 8px 0px 0px #1a1e29;
  overflow:visible;
`;

export const CardWrapper = styled.div`
  background: ${({ color }) => (color === "yellow" ? `#EED0B7` : `#A7B5F1`)};
  width: 224px;
  height: 264px;
  border-radius: 10px;
  background: #eed0b7;
  clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);
  position: relative;
  overflow:visible;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: ${({ color }) => (color === "yellow" ? `#c9984a` : `#59CCFF`)};
  width: 220px;
  height: 260px;
  border-radius: 10px;
  clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);
  position: absolute;
  top: 2px;
  left: 2px;
  overflow:visible;
`;

export const Character = styled.div`
  position: absolute;
  bottom: 0;
  overflow:visible;
`;

export const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardTitleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ color }) =>
    color === "yellow"
      ? `linear-gradient(180deg, #7f4427 0%, #7f442770 80%);`
      : `linear-gradient(180deg,#4B83CA 0%, #26426570 80%)`};
  padding: 1rem;
  height: 70px;
  max-height: 70px;
  border-radius: 5px;
  margin: 1.5rem 0.5rem;
  position: relative;
  clip-path:polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0% 50%);
  /* &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
    border-top: 30px solid
      ${({ color }) => (color === "yellow" ? `#c9984a` : `#59CCFF`)};
    border-top: 30px solid transparent;
    border-right: 30px solid transparent;
  } */
`;

export const CardTitle = styled.h4`
  font-weight: 900;
  font-size: 1.25rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1;
`;

export const CardSubtitle = styled.p`
  font-weight: 600;
  font-size: 0.85rem;
  color: #6efffa;
  text-transform: uppercase;
`;

export const CardButton = styled.button`
  padding: 0.25rem 1rem;
  width: 50%;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background: #ffba16;
  position: absolute;
  bottom: 12px;
`;
