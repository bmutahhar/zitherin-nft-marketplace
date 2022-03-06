import styled from "styled-components";
import { backgroundImages } from "../../../utils/constants/images";

export const SectionOne = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImages.heroBg});
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
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

export const SectionThree = styled.section`
  width: 100%;
  /* border: 2px solid red; */
  margin-top:2rem;
  background: transparent;
  position: relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    left:0;
    top:-80px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${backgroundImages.gradientLeft});
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &::after {
    content: "";
    position: absolute;
    right:0;
    top:-80px;

    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${backgroundImages.gradientRight});
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
