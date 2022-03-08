import React from "react";
import * as Styled from "./styles";
import { icons } from "../../utils/constants/icons";

const ModalLayout = (props) => {
  return (
    <Styled.Container>
      <Styled.ModalHeader>
        <Styled.ActionButton onClick={props.actionHandler}>
          <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
          Go back
        </Styled.ActionButton>
        <Styled.TabHeader>Asset Details</Styled.TabHeader>
      </Styled.ModalHeader>
      <Styled.Body>{props.children}</Styled.Body>
    </Styled.Container>
  );
};

export default ModalLayout;
