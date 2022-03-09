import styled from "styled-components";

export const AssetImgPortion = styled.div`
  background: transparent;
  height: 80%;
  width: 40%;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1920px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 1200px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

export const AssetDetailsPortion = styled.div`
  user-select: none;
  background: transparent;
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  @media only screen and (max-width: 768px) {
    width: 90%;
    padding: 1rem 0;
  }
`;

export const AssetImgContainer = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  width: 85%;
  height: 50%;
  background: #bb50ff24;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media only screen and (min-width: 1920px) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    border-radius: 0;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const AssetImg = styled.img`
  user-select: none;
  width: 125px;
  @media only screen and (max-width: 768px) {
    width: auto;
  }
`;

export const AssetsPriceContainer = styled.div`
  width: 85%;
  background: #22184a;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 1920px) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 5px 0;
    border-radius: 0.5rem;
  }
`;

export const AssetCryptoPrice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #fbba15;
  margin: 0.25rem;

  @media only screen and (min-width: 1920px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AssetUsdPrice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.25rem;
  @media only screen and (min-width: 1920px) {
    font-size: 0.875rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.625rem;
  }
`;

export const IncrementContainer = styled.div`
  width: 85%;
  background: #121238;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  @media only screen and (min-width: 1920px) {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const IncrementCounter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IncrementIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  color: white;
  background: #537fee;
  border-radius: 0.25rem;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    background: #3b70f3;
  }

  @media only screen and (max-width: 768px) {
    width: 20px;
    padding: 0.25rem;
  }
`;

export const AssetHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  @media only screen and (min-width: 1920px) {
    padding: 1rem 0;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0.25rem 0;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AssetTitleContainer = styled.div`
  text-align: left;
  @media only screen and (max-width: 768px) {
    margin-bottom: 0.25rem;
  }
`;

export const AssetTitle = styled.h6`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;

  @media only screen and (min-width: 1920px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1.1rem;
  }
`;

export const AssetSubTitle = styled.span`
  color: #6efffa;
  font-size: 0.875rem;
  font-weight: 600;
  @media only screen and (min-width: 1920px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;

export const TraitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AssetDescription = styled.p`
  color: #f5f5f5;
  font-size: 0.875rem;
  text-align: left;
  font-weight: 300;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;

  @media only screen and (min-width: 1920px) {
    font-size: 1.25rem;
    /* padding: 1rem 0; */
  }
  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
    padding: 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.675rem;
    padding: 0.5rem 0;
  }
`;

export const BidsPriceContainer = styled.div`
  /* height: 100%; */
  width: 100%;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Tab = styled.div`
  width: 25%;
  padding: 0.5rem 0;
  background: #4e38a1;
  color: white;
  font-size: 0.875rem;
  font-weight: 300;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 5px solid #644fc9;

  &:hover {
    cursor: pointer;
  }

  &.active {
    color: white;
    background: #644fc9;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;

export const BidContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #22184a;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  padding: 1rem;
  @media only screen and (min-width: 1920px) {
    height: 190px;
  }
  @media only screen and (max-width: 1200px) {
    height: 150px;
    padding: 0.5rem;
  }
`;

export const BidBox = styled.div`
  width: 95%;
  height: 90%;
  border-radius: 12px;
  background: #121238;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BidField = styled.textarea`
  width: 100%;
  height: 70%;
  color: white;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  text-align: left;
  background: transparent;
  resize: none;

  &::placeholder {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const BidButtonContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.5rem;
`;

export const BidButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  color: #6efffa;
  font-size: 0.875rem;
  font-weight: 600;
  outline: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  &:hover {
    cursor: pointer;
    color: #4ec2be;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;
