import styled from "styled-components";
export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  /* border: 2px solid white; */
  margin: 4rem 2rem;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SocialIcon = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;

  &:hover{
    cursor: pointer;
    transform:scale(1.1);
    transition: 0.2s ease-in;
  }

  @media only screen and (min-width: 1920px) {
    width: 220px;
  }
  
  @media only screen and (max-width: 1200px) {
    width: 150px;
  }

  @media only screen and (max-width: 900px) {
    width: 100px;
  }
  @media only screen and (max-width: 768px) {
    width: 125px;
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
