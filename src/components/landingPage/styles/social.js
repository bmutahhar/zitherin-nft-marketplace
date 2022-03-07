import styled from "styled-components";
export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  /* border: 2px solid white; */
  margin: 4rem 2rem;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid yellow; */
`;

export const SocialIcon = styled.div`
  color: white;
  width: 200px;
  @media only screen and (max-width: 1200px) {
    width: 150px;
  }

  @media only screen and (max-width: 900px) {
    width: 100px;
  }
`;

export const SocialText = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;

  @media only screen and (min-width: 1920px) {
    font-size: 2rem;
    font-weight: 300;
  }
`;
