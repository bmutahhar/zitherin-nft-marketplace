import React from "react";
import { useMediaQuery } from "react-responsive";
import * as Styled from "./styled.components";
import { icons } from "../../utils/constants/icons";

const ActivitiesTable = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Styled.Container>
      <Styled.NonModalWrapper>
        <Styled.ModalHeader>
          {!isMobileOrTablet && (
            <Styled.ActionButton>
              This Month
              <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
            </Styled.ActionButton>
          )}
          <Styled.TabHeader>
            {isMobileOrTablet && (
              <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
            )}
            <Styled.TabHeaderText>My Activities</Styled.TabHeaderText>
          </Styled.TabHeader>
        </Styled.ModalHeader>
        <Styled.Body></Styled.Body>
      </Styled.NonModalWrapper>
      <table>
        <thead style={{ padding: "200px" }}>
          <tr style={{ padding: "200px" }}>
            <th>efbiuw</th>
            <th>efbiuwef</th>
            <th>efbiuwef</th>
            <th>efbiuwef</th>
            <th>efbiuwef</th>
            <th>efbiuwef</th>
          </tr>
        </thead>
      </table>
    </Styled.Container>
  );
};

export default ActivitiesTable;
