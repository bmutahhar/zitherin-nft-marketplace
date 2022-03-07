import React from "react";
import * as Styled from "./styled.components";
import { useLocation, useNavigate } from "react-router-dom";
import { PolygonButton } from "../buttons";
import { icons } from "../../utils/constants/icons";

const Sidebar = ({ toggleSiderbar }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
    toggleSiderbar();
  };
  return (
    <Styled.Container>
      <Styled.CloseIconContainer onClick={toggleSiderbar}>
        {icons.closeIcon}
      </Styled.CloseIconContainer>
      <Styled.NavItems>
        <Styled.NavItem
          onClick={() => navigateTo("/")}
          className={pathname === "/" ? "active" : ""}
        >
          Home
        </Styled.NavItem>
        <Styled.NavItem
          onClick={() => navigateTo("/marketplace")}
          className={pathname === "/marketplace" ? "active" : ""}
        >
          Marketplace
        </Styled.NavItem>
        <Styled.NavItem
          onClick={() => navigateTo("/mint")}
          className={pathname === "/mint" ? "active" : ""}
        >
          Mint
        </Styled.NavItem>
        <Styled.NavBtnContainer>
          <PolygonButton>Connect Wallet</PolygonButton>
        </Styled.NavBtnContainer>
      </Styled.NavItems>
    </Styled.Container>
  );
};

export default Sidebar;
