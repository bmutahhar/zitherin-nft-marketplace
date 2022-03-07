import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
`;

export const NavLogo = styled.a`
  margin-right: auto;
  flex: 1;
  @media only screen and (max-width: 768px) {
    flex: auto;
  }
`;

export const NavLogoImg = styled.img`
  width: 125px;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  .active {
    position: relative;
    &::before {
      width: 100%;
      height: 100%;
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: #3b2a8b;
      transform: skew(-15deg);
      border-bottom: 2px solid #7052e2;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: white;
  padding: 2rem;
  cursor: pointer;
  text-decoration: inherit;
  &:hover {
    color: #7052e2;
  }
`;

export const NavBtnContainer = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
