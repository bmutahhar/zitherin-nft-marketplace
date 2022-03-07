import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  border: 1px solid #3B2A8B;
  border-radius:10px;

  padding: 0.5rem;
  background: #001620;
`;

export const InputField = styled.input`
  width:80%;
  border: none;
  background: transparent;
  border-radius:12px;
  padding: 0.5rem;
  color: #f5f5f5;
  font-size: 1.2rem;
  outline: none;
  &::placeholder {
    color: white;
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
