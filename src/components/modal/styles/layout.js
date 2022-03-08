import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 75vh;
  margin: 2rem auto;
  /* border: 2px solid red; */

  @media only screen and (min-width: 1920px) {
    height: 60vh;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  height: 90%;
  width: 100%;
  background: #392877;
  border-top-left-radius: 1.75rem;
  border-bottom-left-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2rem;
  padding-left: 0;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ActionIcon = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabHeader = styled.div`
  /* border: 2px solid green; */
  border-top-right-radius: 1.75rem;
  padding: 1rem 3rem;
  border:none;
  background: #130933;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;
  height:100%;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    background: #130933;
    /* background: blue; */
    bottom:0px;
    left: -10%;
    z-index: -1;
    width: 50%;
    height: 100%;
    /* border: 1px solid red; */
    transform: skew(-30deg);
  }
  @media only screen and (min-width: 1920px) {
    padding: 1rem 6rem;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 1200px) {
    padding: 1rem 3rem;
    font-size: 1rem;
  }
`;

export const AssetImgPortion = styled.div`
  background: transparent;
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AssetDetailsPortion = styled.div`
  background: transparent;
  height: 80%;
  width: 60%;
  border: 5px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AssetImgContainer = styled.div`
  border-radius: 1.25rem;
  padding: 2rem;
  width: 80%;
  height: 80%;
  background: #bb50ff24;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AssetImg = styled.img``;

export const AssetHeader = styled.div`
  width: 100%;
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AssetTitleContainer = styled.div`
  text-align: left;
`;

export const AssetTitle = styled.h6`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;

  @media only screen and (min-width: 1920px) {
    font-size: 2rem;
  }
`;

export const AssetSubTitle = styled.span`
  color: #6efffa;
  font-size: 0.875rem;
  font-weight: 600;
  @media only screen and (min-width: 1920px) {
    font-size: 1rem;
  }
`;

export const TraitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AssetDescription = styled.p`
  color: #f5f5f5;
  font-size: 1rem;
  text-align: left;
  font-weight:300;
  margin: 0.25rem 0;

  @media only screen and (min-width: 1920px) {
    font-size: 1.125rem;
  }
`;

export const BidsPriceContainer = styled.div`
  height:100%;
  width:100%;
  border: 2px solid white;
`;