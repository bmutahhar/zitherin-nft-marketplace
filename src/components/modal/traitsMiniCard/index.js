import React from "react";
import * as Styled from "./styled.components";

const TraitMiniCard = (props) => {
  return (
    <Styled.Trait bgColor={props.bgColor}>
      <Styled.TraitName>{props.traitName}</Styled.TraitName>
      <Styled.TraitValue traitValueColor={props.traitValueColor}>
        {props.traitValue}
      </Styled.TraitValue>
    </Styled.Trait>
  );
};

export default TraitMiniCard;
