import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
    margin: 0;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
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
    border: 1px solid red;
    height: 100%;
    gap: 5px;
    /* padding: 1rem 0; */
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  display: flex;
  border: 1px solid white;
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
  min-height: 100%;
  border: 1px solid red;
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
