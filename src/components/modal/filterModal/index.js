import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";
import { icons } from "../../../utils/constants/icons";
import { closeFilterModal } from "../../../actions";
import * as Styled from "./styled.components";

const initModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999999,
  },
  content: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    marginLeft: "auto",
    border: "none",
    borderRadius: 0,
    background: "transparent",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: 0,
    width: "30%",
    height: "100%",
    inset: 0,
  },
};

Modal.setAppElement("#root");

const FilterModal = () => {
  const [modalStyles, setModalStyles] = useState(initModalStyles);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeFilterModal());
  };

  useEffect(() => {
    if (isMobileOrTablet) {
      const styles = modalStyles.content;
      styles.width = "70%";
      setModalStyles({ ...modalStyles, content: styles });
    } else {
      const styles = modalStyles.content;
      styles.width = "30%";
      setModalStyles({ ...modalStyles, content: styles });
    }
  }, [isMobileOrTablet, modalStyles]);

  return (
    <Modal
      isOpen={modal.isFilterModalOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={1000}
      style={modalStyles}
      shouldCloseOnOverlayClick={true}
    >
      <Styled.Container>
        <Styled.Header>
          <Styled.HeaderIcon>{icons.settingsIcon}</Styled.HeaderIcon>
          Filter
        </Styled.Header>
        <Styled.Body>
          <Styled.SelectionCategory>
            <Styled.SelectionName>Asset Type</Styled.SelectionName>
            <Styled.Label>
              Lorem
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
            <Styled.Label>
              Lorem Ips
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
            <Styled.Label>
              Lorem I
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
            <Styled.Label>
              Lorem Ips
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
          </Styled.SelectionCategory>

          <Styled.SelectionCategory>
            <Styled.SelectionName>Asset Type</Styled.SelectionName>
            <Styled.Label>
              Lorem
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
            <Styled.Label>
              Lorem Ips
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
            <Styled.Label>
              Lorem I
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
            <Styled.Label>
              Lorem Ips
              <Styled.InputField type="checkbox" />
              <Styled.Checkmark className="checkmark" checked="checked" />
            </Styled.Label>
          </Styled.SelectionCategory>
          <Styled.SelectionCategory>
            <Styled.SelectionName>Asset Price</Styled.SelectionName>
            <Styled.PriceFields>
              <Styled.PriceField
                type="text"
                id="min"
                name="min"
                placeholder="Min"
              />
              <Styled.PriceField
                type="text"
                id="max"
                name="max"
                placeholder="Max"
              />
            </Styled.PriceFields>
            <Styled.ApplyButton>Apply Filter</Styled.ApplyButton>
          </Styled.SelectionCategory>
        </Styled.Body>
      </Styled.Container>
    </Modal>
  );
};

export default FilterModal;
