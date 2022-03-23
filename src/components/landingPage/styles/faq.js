import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 90%;
  height: 100%;
  /* border: 2px solid white; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Accordion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  margin: 0.5rem 0;
  /* border: none; */
  /* border-bottom: 1px solid grey; */
  /* border: 1px solid green; */
  &:hover {
    cursor: pointer;
  }

  &:last-of-type {
    border: none;
  }
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* border: 1px solid white; */
  padding: 1rem 0.5rem;
`;

export const QuestionText = styled.p`
  display: inline-flex;
  color: white;
  text-align: left;
  font-size: 1.25rem;
  font-weight: 300;
  width: 90%;

  @media only screen and (min-width: 1920px) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const QuestionIcon = styled.div`
  width: 40px;
  color: white;
  /* @media only screen and (max-width: 1200px) {
    width: 40px;
  } */

  @media only screen and (max-width: 900px) {
    width: 35px;
  }

  @media only screen and (max-width: 768px) {
    width: 30px;
  }
`;

export const Answer = styled.p`
  display: block;
  color: white;
  text-align: left;
  font-size: 1.25rem;
  font-weight: 300;
  width: 100%;
  height: max-content;
  /* border: 1px solid red; */
  padding: 2rem 0.5rem;
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
