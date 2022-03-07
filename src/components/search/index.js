import React from "react";
import * as Styled from "./styled.components";
import { icons } from "../../utils/constants/icons";

const Search = (props) => {
  return (
    <Styled.Container>
      <Styled.LeftIcon>{icons.searchIcon}</Styled.LeftIcon>
      <Styled.InputField type="text" id="search" name="search" placeholder="Search" autoComplete="off" />
    </Styled.Container>
  );
};

export default Search;
