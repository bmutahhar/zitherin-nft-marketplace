import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex: auto;
    justify-content: space-between;
    padding: 1rem;
    border: none;
  }
`;

export const NavLogo = styled.a`
  margin-right: auto;
  padding: 0 1rem;
  @media only screen and (max-width: 768px) {
    flex: 0;
  }
`;

export const NavLogoImg = styled.img`
  width: 125px;
  @media only screen and (max-width: 768px) {
    width: 80px;
  }
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
      border-bottom: 4px solid #7052e2;
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
  text-decoration: none;
  &:hover {
    color: #7052e2;
  }

  @media only screen and (max-width:900px){
    padding:1.25rem 1rem;
    font-size:0.875rem;
  }
`;

export const NavBtnContainer = styled.div`
  /* flex: 1; */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuIcon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      width: 30px;
      height: 30px;
      color: white;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  color: white;
  @media only screen and (max-width:900px){
    font-size:0.875rem;
  }
`;
