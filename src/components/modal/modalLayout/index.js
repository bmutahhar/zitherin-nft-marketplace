import React from "react";
import * as Styled from "../styles";
import { icons } from "../../../utils/constants/icons";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex:9999,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.7)",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
};
Modal.setAppElement("#root");
const ModalLayout = (props) => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Modal isOpen={props.isOpen} closeTimeoutMS={300} style={modalStyles}>
      <Styled.Container>
        <Styled.ModalHeader>
          {!isMobileOrTablet && (
            <Styled.ActionButton onClick={props.closeHandler}>
              <Styled.ActionIcon>{icons.arrowLeft}</Styled.ActionIcon>
              Go back
            </Styled.ActionButton>
          )}
          <Styled.TabHeader>
            {isMobileOrTablet && (
              <Styled.ActionIcon onClick={props.closeHandler}>
                {icons.arrowLeft}
              </Styled.ActionIcon>
            )}
            <Styled.TabHeaderText>Asset Details</Styled.TabHeaderText>
          </Styled.TabHeader>
        </Styled.ModalHeader>
        <Styled.Body>{props.children}</Styled.Body>
      </Styled.Container>
    </Modal>
  );
};

export default ModalLayout;
