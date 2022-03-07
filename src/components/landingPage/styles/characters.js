import styled from "styled-components";

export const CharactersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: ${({ position }) =>
    position === "top" ? `flex-start` : `flex-end`};
  ${({ position }) =>
    position === "top" ? `padding-bottom:5rem;` : `padding-top:5rem;`}

  @media only screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ShadowWrapper = styled.div`
  margin: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 9px 8px 0px 0px #1a1e29;

  &:hover{
    transform:scale(1.1);
    transition: 0.4s ease-in;
  }

  @media only screen and (max-width: 1200px) {
    margin: 0.5rem 1rem;
  }
`;

export const CardWrapper = styled.div`
  width: 224px;
  height: 264px;
  border-radius: 10px;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ color }) => (color === "yellow" ? `#EED0B7` : `#A7B5F1`)};
    border-radius: 10px;
    clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);
  }

  @media only screen and (max-width: 1200px) {
    width: 184px;
    height: 224px;
  }

  @media only screen and (max-width: 900px) {
    width: 144px;
    height: 184px;
  }
  @media only screen and (max-width: 768px) {
    width: 184px;
    height: 224px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 220px;
  height: 260px;
  border-radius: 10px;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);
    background: ${({ color }) => (color === "yellow" ? `#C9984A` : `#59ccff`)};
    background: ${({ color }) =>
      color === "yellow"
        ? `#C9984A`
        : `radial-gradient(circle, rgba(89,204,255,1) 0%, rgba(81,153,205,1) 80%, rgba(76,119,172,1) 100%)`};
    border-radius: 10px;
  }

  @media only screen and (max-width: 1200px) {
    width: 180px;
    height: 220px;
  }

  @media only screen and (max-width: 900px) {
    width: 140px;
    height: 180px;
  }

  @media only screen and (max-width: 768px) {
    width: 180px;
    height: 220px;
  }
`;

export const Character = styled.div`
  position: absolute;
  bottom: -20px;
`;

export const CharacterImg = styled.img`
  width: 100%;
  /* height: 100%; */
`;

export const CardContent = styled.div`
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 70px;
  max-height: 70px;
  border-radius: 5px;
  margin: 1.5rem 0.5rem;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: ${({ color }) => (color === "yellow" ? `#7F4427` : `#4B83CA`)};

    background: ${({ color }) =>
      color === "yellow"
        ? `linear-gradient(180deg, #7F4427 0%, #7F442790 80%)`
        : `linear-gradient(180deg, #4B83CA 0%, #26426550 100%)`};
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0% 50%);
  }

  @media only screen and (max-width: 900px) {
    padding: 0.25rem 0.5rem;
    height: 50px;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    height: 50px;
  }
`;

export const CardTitle = styled.h4`
  font-weight: 900;
  font-size: 1.25rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.2;
  margin-bottom: 0.25rem;

  @media only screen and (max-width: 900px) {
    font-size: 0.9rem;
    letter-spacing: 3px;
  }
`;

export const CardSubtitle = styled.p`
  font-weight: 600;
  font-size: 0.85rem;
  color: #6efffa;
  text-transform: uppercase;
  @media only screen and (max-width: 900px) {
    font-size: 0.6rem;
  }
`;

export const CardButton = styled.button`
  padding: 0.25rem 1rem;
  width: 80%;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background: #ffba16;
  position: absolute;
  bottom: -10px;
  text-transform: uppercase;
  @media only screen and (max-width: 900px) {
    font-size: 0.75rem;
    width: max-content;
  }
`;
