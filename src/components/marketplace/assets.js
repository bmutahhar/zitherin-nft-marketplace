import styled from "styled-components";

export const AssetContainer = styled.div`
  width: 100%;
  border: 2px solid green;
  padding: 2rem 1rem;
`;

export const AssetCard = styled.div`
  margin: 0 1rem;
  width: 250px;
  height: 280px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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
    border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
    background: #1b1444;
    clip-path: polygon(24% 0, 100% 0%, 100% 100%, 0 100%, 0 27%);
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Asset = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
`;

export const AssetImg = styled.img`
  width: 100%;
`;

export const Details = styled.div`
  width: 100%;
  height: 20%;
  border: 2px solid green;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: transparent;
`;
