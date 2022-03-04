import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10rem;
`;

export const HeroTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #f5f5f5;
  margin: 1rem;
  @media only screen and (min-width: 1920px) {
    font-size: 4.5rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 3.5rem;
  }
`;

export const HeroContent = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  color: white;
  line-height: 1.5;
  width: 70%;
  margin: 1rem 1rem 2rem 1rem;
  @media only screen and (min-width: 1920px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1.25rem;
  }
`;

export const HeroButton = styled.div`
  margin: 1rem 2rem;
`;
