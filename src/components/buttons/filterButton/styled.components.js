import styled from "styled-components";

export const Button = styled.button`
  /* width: 10%; */
  padding: 0.5rem 2rem;
  background: #3b2a8b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f5f5f5;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    background: #26176e;
  }

  @media only screen and (max-width: 900px) {
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    padding: 0.25rem 1rem;
    margin: 0.25rem;
  }
`;

export const ButtonIcon = styled.span`
  width: 25px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content:center;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
