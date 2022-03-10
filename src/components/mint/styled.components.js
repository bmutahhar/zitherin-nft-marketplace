import styled from "styled-components";

export const NonModalWrapper = styled.div`
  width: 70%;
  height: 90vh;
  margin: 2rem auto;
  /* border: 2px solid red; */

  @media only screen and (min-width: 1920px) {
    height: 60vh;
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    height: 95vh;
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  @media only screen and (max-width: 768px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-radius: 0;
    flex-direction: column;
    height: auto;
  }
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

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
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
  display: flex;
  /* border:5px solid red; */
  align-items: center;
  justify-content: center;
  border-top-right-radius: 1.75rem;
  padding: 1rem 3rem;
  border: none;
  background: #130933;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;
  height: 100%;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    background: #130933;
    /* background: blue; */
    bottom: 0;
    top: 0;
    left: -10%;
    z-index: -1;
    width: 50%;
    height: 99%;
    /* border: 1px solid red; */
    transform: skew(-30deg);
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  @media only screen and (min-width: 1920px) {
    padding: 1rem 6rem;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 1200px) {
    padding: 1rem 3rem;
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    border-top-left-radius: 1.75rem;
    width: 100%;
    font-size: 0.875rem;
    padding: 1rem 2rem;
  }
`;

export const TabHeaderText = styled.span`
  margin: 0 auto;
`;

export const AssetTitleContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid red;
  width: 90%;
  padding: 1rem;
  @media only screen and (max-width: 768px) {
    margin-bottom: 0.25rem;
  }
`;

export const AssetTitle = styled.h6`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;

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
  text-transform: uppercase;
  @media only screen and (min-width: 1920px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
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
