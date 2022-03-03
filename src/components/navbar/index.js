import React from "react";
import * as Styled from "./styled.components";
import { PolygonButton } from "../buttons";
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return <Styled.NavContainer>
    <Styled.NavLogo>
      <Styled.NavLogoImg src={logo}/>
    </Styled.NavLogo>
    <Styled.NavItems>
      <Styled.NavItem className="active">Home</Styled.NavItem>
      <Styled.NavItem>Marketplace</Styled.NavItem>
      <Styled.NavItem>Mint</Styled.NavItem>
    </Styled.NavItems>
    <Styled.NavBtnContainer>
    <PolygonButton>Connect Wallet</PolygonButton>
    </Styled.NavBtnContainer>
  </Styled.NavContainer>;
};

export default Navbar;
