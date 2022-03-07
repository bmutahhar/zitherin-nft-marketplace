import React from "react";
import * as Styled from "./styled.components";
import { PolygonButton } from "../buttons";
import { useLocation } from "react-router-dom";
import { backgroundImages } from "../../utils/constants/images";
import { icons } from "../../utils/constants/icons";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Styled.NavContainer>
      <Styled.NavLogo>
        <Styled.NavLogoImg src={backgroundImages.logo} />
      </Styled.NavLogo>
      <Styled.NavItems>
        <Styled.NavItem to="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Styled.NavItem>
        <Styled.NavItem
          to="/marketplace"
          className={pathname === "/marketplace" ? "active" : ""}
        >
          Marketplace
        </Styled.NavItem>
        <Styled.NavItem
          to="/mint"
          className={pathname === "/mint" ? "active" : ""}
        >
          Mint
        </Styled.NavItem>
      </Styled.NavItems>
      <Styled.NavBtnContainer>
        <PolygonButton>Connect Wallet</PolygonButton>
      </Styled.NavBtnContainer>
      <Styled.NavMenuIcon>{icons.mobileMenu}</Styled.NavMenuIcon>
    </Styled.NavContainer>
  );
};

export default Navbar;
