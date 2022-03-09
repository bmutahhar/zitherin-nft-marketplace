import styled from "styled-components";

export const Container = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? "95%" : "50%")};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3b2a8b;
  border-radius: 10px;
  padding: 0.5rem;
  background: #001620;

  @media only screen and (max-width: 768px) {
    padding: 0.25rem;
    padding-left:0.5rem;
    margin: 0 auto;
  }
`;

export const InputField = styled.input`
  width: 80%;
  border: none;
  background: transparent;
  border-radius: 12px;
  padding: 0.5rem;
  color: #f5f5f5;
  font-size: 1.2rem;
  outline: none;
  &::placeholder {
    color: white;
    font-size: 1rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LeftIcon = styled.div`
  width: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightIcon = styled.div`
  margin-right: 0.25rem;
`;
