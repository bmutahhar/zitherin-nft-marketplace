import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { PolygonButton } from "../buttons";
import { backgroundImages } from "../../utils/constants/images";
import { icons } from "../../utils/constants/icons";
import { connect } from "../../actions";
import Avatar from "react-avatar";
import Sidebar from "../sidebar";
import * as Styled from "./styled.components";
import { truncateStr } from "../../utils/helpers";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const { isConnected, ownerAddress } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleSiderbar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const connectHandler = () => {
    dispatch(connect("0x6ff5e29e06c948f57def80b3e34603cd23f6dee9"));
  };

  if (isMobileOrTablet && sidebarOpen) {
    return <Sidebar toggleSiderbar={toggleSiderbar} />;
  }
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
        {isConnected && (
          <Styled.NavItem
            to="/activities"
            className={pathname === "/activities" ? "active" : ""}
          >
            Activities
          </Styled.NavItem>
        )}
      </Styled.NavItems>
      {!isConnected && (
        <Styled.NavBtnContainer>
          <PolygonButton onClick={connectHandler}>Connect Wallet</PolygonButton>
        </Styled.NavBtnContainer>
      )}

      {isConnected && (
        <Styled.AvatarContainer>
          <Styled.UserName>{truncateStr(ownerAddress,15)}</Styled.UserName>
          <Avatar
            name={ownerAddress}
            round
            size={50}
            color="#392877"
            fontSize={16}
          />
        </Styled.AvatarContainer>
      )}
      <Styled.NavMenuIcon onClick={toggleSiderbar}>
        {icons.mobileMenu}
      </Styled.NavMenuIcon>
    </Styled.NavContainer>
  );
};

export default Navbar;
