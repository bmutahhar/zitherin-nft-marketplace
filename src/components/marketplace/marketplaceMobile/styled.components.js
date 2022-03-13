import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media only screen and (max-height: 1000px) {
    height: 1000px;
  }
`;

export const Title = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #f5f5f5;
  /* text-align: left; */
  margin: 0.5rem;
  margin-left: 2.5%;
`;

export const AssetsContainer = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  overflow-y: auto;
  max-height: 100vh;
  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;



export const ArrowUpIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  color: white;
`;

export const LoadingAssetContainer = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  overflow-y: auto;
  max-height: 100vh;
`;
