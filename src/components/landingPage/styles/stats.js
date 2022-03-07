import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 38px;
  border-top-right-radius: 38px;
  background: #00161f;
  border: none;
  position: absolute;
  bottom: 0;
  @media only screen and (min-width: 925px) {
    border: 1px solid grey;
    border-bottom: none;
    &::before {
      position: absolute;
      bottom: 0;
      left: -5px;
      height: 4rem;
      width: 5px;
      content: "";
      background-color: #00161f;
      /* background-color: white; */
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: -5px;
      height: 4rem;
      width: 5px;
      content: "";
      background-color: #00161f;
    }
  }

  @media only screen and (max-width: 768px) {
    position: initial;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    border-radius: 0;
    background-color: transparent;
    margin: 2rem 0;
  }
`;

export const StatsCard = styled.div`
  /* CSS for standard full HD screens */
  padding: 2rem 3rem;

  /* Media query for screens greater than 2k */
  @media only screen and (min-width: 1920px) {
    padding: 2.5rem 5rem;
  }

  @media only screen and (max-width: 1200px) {
    padding: 1.5rem 2.5rem;
  }
  @media only screen and (max-width: 925px) {
    padding: 1rem 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StatsNumber = styled.h4`
  color: white;
  font-size: 3rem;
  font-weight: 400;
  text-align: left;
  padding: 0.5rem;

  @media only screen and (min-width: 1920px) {
    font-size: 4.5rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 2.75rem;
  }
  @media only screen and (max-width: 925px) {
    font-size: 2.25rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0;
  }
`;

export const StatsText = styled.div`
  color: white;
  font-size: 1.25rem;
  font-weight: 300;
  padding: 0.5rem;
  text-align: left;
  @media only screen and (min-width: 1920px) {
    font-size: 1.75rem;
  }
  @media only screen and (max-width: 925px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
