import styled from "styled-components";

export const FooterTitle = styled.h4`
  font-size: 2.5rem;
  color: white;
  margin: 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const NewsLetter = styled.div`
  border: 1px solid #707070;
  border-radius: 12px;
  margin: 2rem;
  padding: 1rem 2rem;
  width: 30%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  @media only screen and (max-width: 768px) {
    width: 60%;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const InputField = styled.input`
  width: 80%;
  background: transparent;
  height: 100%;
  color: white;
  font-size: 1.25rem;
  border: none;
  outline: none;
  &::placeholder {
    color: white;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    &::placeholder {
      color: white;
      font-size: 1rem;
    }
  }
`;

export const NewsLetterIcon = styled.div`
  width: 50px;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1920px) {
    width: 10%;
  }

  @media only screen and (max-width: 768px) {
    width: 30px;
  }
`;

export const CopyRights = styled.p`
  color: rgba(245, 245, 245, 0.7);
  font-size: 1.5rem;
  margin: 5rem 2rem;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 2rem 1rem;
  }
`;
