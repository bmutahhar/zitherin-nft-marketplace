import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  /* @media only screen and (max-height: 1000px) {
    height: 1250px;
  } */

  @media only screen and (max-width: 768px) {
    height: 1250px;
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
  min-height: 300px;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: ${({ empty }) => (empty ? "1fr" : "1fr 1fr")};
  align-items: center;
  justify-items: center;
  gap: 1rem;
  overflow-y: auto;
  max-height: 300px;
  color: white;
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
  min-height: 300px;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  overflow-y: auto;
  max-height: 300px;
  @media only screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

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
