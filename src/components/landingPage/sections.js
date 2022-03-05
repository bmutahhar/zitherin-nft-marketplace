import styled from "styled-components";
import sectionOneBg from "../../assets/images/hero-bg.png";

export const SectionOne = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${sectionOneBg});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: lighten; */
  /* border: 2px solid cyan; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  width: 100%;
  height: 100vh;
  background: transparent;
`;
