import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  margin: 2rem auto 1rem;
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
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  max-height: 90%;
  height: 90%;
  width: 100%;
  max-width: 100%;
  overflow: auto;
  background: #392877;
  border-top-left-radius: 1.75rem;
  border-bottom-left-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  /* padding-bottom: 2rem; */

  @media only screen and (min-width: 1920px) {
    padding: 2rem;
  }

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
  font-size: 0.875rem;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const ActionIcon = styled.span`
  width: 25px;
  height: 25px;
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
  /* border: 2px solid red; */
  border-collapse: collapse;
  thead tr {
    border: none;
  }
`;

export const TableRow = styled.tr`
  /* border-bottom: 1px solid grey; */
  position: relative;
  &:last-of-type {
    border: none;
    &::before {
      background: transparent;
    }
  }

  &::before {
    content: "";
    width: 96%;
    height: 1px;
    background: grey;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const THead = styled.thead``;

export const TBody = styled.tbody`
  /* border: 2px solid red; */
  overflow-y: auto;
`;

export const TH = styled.th`
  color: #bb50ff;
  font-size: 1.125rem;
  padding: 1rem 0.5rem 1rem 0.25rem;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;
`;

export const TD = styled.td`
  font-size: 1rem;
  font-weight: 300;
  padding: 1.5rem 0.5rem 1.5rem 0.25rem;
  color: white;
  text-align: left;
  &:last-of-type {
    color: #6efffa;
    &:hover {
      cursor: pointer;
      color: #26c7c1;
      transition: 0.3s ease-in-out;
    }
  }

  @media only screen and (min-width: 1920px) {
    padding: 2rem 0.5rem 2rem 0.25rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.75rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 0.625rem;
  }
`;

export const Separator = styled.hr`
  width: 96%;
  height: 1px;
  background: red;
  position: absolute;
  bottom: 0;
  left: 0;
  /* background: red; */
`;

export const PaginationRow = styled.div`
  width: 70%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin: 0 auto 1rem;
  @media only screen and (min-width: 1920px) {
    height: 70vh;
    width: 50%;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    /* height: 95vh; */
    width: 100%;
  }
`;

export const ArrowButtons = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem;
  background: #392877;
  color: white;
  border-radius: 10px;
  margin: 0 0.25rem;

  &:hover {
    cursor: pointer;
    background: #211451;
    transition: 0.3s ease-in-out;
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
`;

export const PageNum = styled.span`
  background: #011117;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 300;
  color: white;
  padding: 0.75rem 1.875rem;
  margin: 0 0.5rem;
  border-radius: 10px;
  border: 1px solid #392877;
`;

export const PageCount = styled(PageNum)`
  border: none;
  background: transparent;
  border-radius: 0;
  padding: 0.25rem;
  /* border: 1px solid red; */
`;
