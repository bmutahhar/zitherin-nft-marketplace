import styled from 'styled-components';

export const AssetImgPortion = styled.div`
  background: transparent;
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AssetDetailsPortion = styled.div`
  background: transparent;
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 80%;
  height: 80%;
  background: #bb50ff24;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    border-radius: 0;
    width: 100%;
    padding: 0;
  }
`;

export const AssetImg = styled.img`
  user-select: none;
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
    padding: 1rem 0;
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
  height: 100%;
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
  background: #1f144e;
  color: #466bf7;
  font-size: 1rem;
  font-weight: 300;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0 0.25rem 0.25rem 0;

  &:hover {
    cursor: pointer;
  }

  &.active {
    color: white;
    background: #644fc9;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;

export const ScrollBox = styled.div`
  overflow: hidden;
  width: 100%;
  height: 180px;
  background: #22184a;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.5rem;
  padding-right: 0;
  @media only screen and (min-width: 1920px) {
    height: 200px;
  }
  @media only screen and (max-width: 1200px) {
    height: 150px;
    padding: 0.5rem;
  }
`;

export const Bids = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #22184a;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 20px;
  box-sizing: content-box;
  @media only screen and (min-width: 1920px) {
    padding: 0.5rem;
    padding-left: 0rem;
  }
`;

export const Bid = styled.div`
  width: 95%;
  background: #121238;
  border-radius: 5px;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    padding: 0.75rem 0.5rem;
    margin: 0.125rem 0.25rem;
  }
`;

export const BidNumber = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: 300;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;

export const BidPrice = styled.span`
  display: flex;
  align-items: center;
  color: #537fee;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 0.5rem;
  margin-right: auto;
  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;

export const EthIcon = styled.span`
  display: inline-flex;
  width: 20px;
  user-select: none;
  margin-right: 15px;
  @media only screen and (max-width: 1200px) {
    width: 15px;
    margin-right: 10px;
  }
`;

export const BidAction = styled.button`
  border: none;
  background: transparent;
  outline: none;
  color: #6efffa;
  font-size: 0.875rem;
  font-weight: 600;
  outline: none;
  margin-right: 0.5rem;
  &:hover {
    cursor: pointer;
    color: #4ec2be;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }
`;
