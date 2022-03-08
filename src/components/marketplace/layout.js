import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 3rem;
  color: #f5f5f5;
  text-align: left;
`;

export const Main = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  display: flex;
  /* border: 1px solid white; */
  align-items: center;
  justify-content: space-between;
  /* justify-content: ${({ justifyContent }) =>
    justifyContent ?? `flex-start`}; */
`;

export const Separator = styled.div`
  width: 1px;
  height: 70%;
  background: grey;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
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
