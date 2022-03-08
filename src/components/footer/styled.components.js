import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  background: #011117;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.p`
  color: rgba(245, 245, 245, 0.7);
  font-size: 1rem;
  font-weight: 300;
  @media only screen and (min-width: 1920px) {
    font-size: 1.5rem;
  }
`;
