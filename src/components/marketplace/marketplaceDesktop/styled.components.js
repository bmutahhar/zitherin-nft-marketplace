import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media only screen and (max-height: 1000px) {
    height: 1000px;
  }
`;

export const Title = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 3rem;
  color: #f5f5f5;
  text-align: left;
  margin-right: auto;

  @media only screen and (max-width: 1200px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 900px) {
    margin: 0 1rem;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Group = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;

  @media only screen and (min-width: 1920px) {
    width: 30%;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 70%;
  background: grey;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 1rem;
`;

export const TokensContainer = styled.div`
  width: 20%;
  height: 100%;
  overflow: hidden;
  padding: 1rem 0;
`;

export const TokensWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-right: 20px;
  box-sizing: content-box;
`;

export const BuyAssetsContainer = styled.div`
  width: 100%;
  /* height: 50%; */
  /* border: 2px solid white; */
`;

export const OwnAssetsContainer = styled.div`
  width: 100%;
  /* height: 50%; */
  /* border: 2px solid white; */
`;

export const AssetContainer = styled.div`
  min-width: 100%;
  padding: 1rem 2rem;
`;

export const LoadingAssetContainer = styled.div`
  width: 100%;
  max-width:100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding:0 2rem;
`;
