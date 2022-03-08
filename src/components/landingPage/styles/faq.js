import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 90%;
  height: 100%;
  /* border: 2px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin: 1rem;
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid grey;

  &:last-of-type {
    border: none;
  }
`;

export const QuestionText = styled.p`
  display: inline-flex;
  color: white;
  text-align: left;
  font-size: 1.55rem;
  font-weight: 300;
  width: 90%;

  @media only screen and (min-width: 1920px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const QuestionIcon = styled.div`
  width: 50px;
  color: white;
  @media only screen and (max-width: 1200px) {
    width: 40px;
  }

  @media only screen and (max-width: 900px) {
    width: 35px;
  }

  @media only screen and (max-width: 768px) {
    width: 30px;
  }
`;
