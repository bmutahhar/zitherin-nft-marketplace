import React from "react";
import * as Styled from "./styled.components";
import { icons } from "../../../utils/constants/icons";

const FilterButton = (props) => {
  return (
    <Styled.Button onClick={props.onClick}>
      <Styled.ButtonIcon>{icons.settingsIcon}</Styled.ButtonIcon>
      {props.children}
    </Styled.Button>
  );
};

export default FilterButton;
