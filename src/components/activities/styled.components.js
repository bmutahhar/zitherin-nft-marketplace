import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1920px) {
    align-items: flex-start;
    height: 90vh;
  }
`;

export const NonModalWrapper = styled.div`
  width: 70%;
  height: 90vh;
  margin: 2rem auto;
  /* border: 2px solid white; */

  @media only screen and (min-width: 1920px) {
    height: 70vh;
    width: 50%;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 900px) {
    height: auto;
  }
  @media only screen and (max-width: 768px) {
    /* height: 95vh; */
    width: 100%;
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
  border: 2px solid white;
  border-top-left-radius: 1.75rem;
  border-bottom-left-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */
  /* padding: 1rem; */
  /* padding-bottom: 2rem; */
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
  /* border: 2px solid red; */
  padding: 1rem 2rem;
  padding-left: 0;
  margin-left: 0.5rem;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1.25rem;
  letter-spacing: 1px;

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
  transform: rotate(-90deg);
  margin-left: 10px;
`;

export const TabHeader = styled.div`
  display: flex;
  /* border: 5px solid red; */
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
  text-transform: uppercase;
`;

export const Table = styled.table`
  width: 100%;
  border: 2px solid red;
`;

export const TableRow = styled.tr`
  width: 100%;
  border: 2px solid green;
  padding: 2rem;
`;

export const THead = styled.thead`
  /* width: 100%; */
  border: 2px solid blue;
  padding: 2rem;
`;

export const TBody = styled.tbody``;

export const TH = styled.th`
  color: #bb50ff;
  font-size: 1.25rem;
`;
