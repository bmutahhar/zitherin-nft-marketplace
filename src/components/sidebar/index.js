import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../actions";
import { PolygonButton } from "../buttons";
import { icons } from "../../utils/constants/icons";
import * as Styled from "./styled.components";
import { truncateStr } from "../../utils/helpers";

const Sidebar = ({ toggleSiderbar }) => {
  const { isConnected, ownerAddress } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateTo = (path) => {
    navigate(path);
    toggleSiderbar();
  };
  const connectHandler = () => {
    dispatch(connect("0x6ff5e29e06c948f57def80b3e34603cd23f6dee9"));
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
        {isConnected && (
          <Styled.NavItem
            onClick={() => navigateTo("/activities")}
            className={pathname === "/activities" ? "active" : ""}
          >
            Activities
          </Styled.NavItem>
        )}
        {!isConnected && (
          <Styled.NavBtnContainer>
            <PolygonButton onClick={connectHandler}>
              Connect Wallet
            </PolygonButton>
          </Styled.NavBtnContainer>
        )}
        {isConnected && ownerAddress !== "" && (
          <Styled.UserName>{truncateStr(ownerAddress,15)}</Styled.UserName>
        )}
      </Styled.NavItems>
    </Styled.Container>
  );
};

export default Sidebar;
