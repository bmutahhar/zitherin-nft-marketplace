import React, { useState } from "react";
import { ModalLayout, PlainButton } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { closeOwnAssetModal } from "../../../actions";
import { icons } from "../../../utils/constants/icons";
import * as Styled from "./styled.components";

const OwnAssetModal = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const modal = useSelector((state) => state.modal);
  const modalData = modal.ownAssetModalData;
  const [priceValue, setPriceValue] = useState(
    Number(modalData.price).toFixed(4)
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeOwnAssetModal());
  };

  const changeTabHandler = (index) => setActiveTabIndex(index);
  if (modalData) {
    return (
      <ModalLayout isOpen={modal.isOwnAssetModalOpen} closeHandler={closeModal}>
        <Styled.AssetImgPortion>
          <Styled.AssetImgContainer>
            <Styled.AssetImg src={modalData.image} />
          </Styled.AssetImgContainer>
        </Styled.AssetImgPortion>
        <Styled.AssetDetailsPortion>
          <Styled.AssetHeader>
            <Styled.AssetTitleContainer>
              <Styled.AssetSubTitle>{modalData.traitUri}</Styled.AssetSubTitle>
              <Styled.AssetTitle>{modalData.traitName}</Styled.AssetTitle>
            </Styled.AssetTitleContainer>
          </Styled.AssetHeader>

          <Styled.AssetDescription>
            {modalData.traitValue}
          </Styled.AssetDescription>

          <Styled.BidsPriceContainer>
            <Styled.TabsContainer>
              <Styled.Tab
                className={activeTabIndex === 0 ? "active" : ""}
                onClick={() => changeTabHandler(0)}
              >
                Bids
              </Styled.Tab>
              <Styled.Tab
                className={activeTabIndex === 1 ? "active" : ""}
                onClick={() => changeTabHandler(1)}
              >
                Price
              </Styled.Tab>
            </Styled.TabsContainer>
            {activeTabIndex === 0 && (
              <Styled.ScrollBox>
                <Styled.Bids>
                  {modalData.bids && modalData.bids.length > 0
                    ? modalData.bids.map((item, index) => (
                        <Styled.Bid key={item.id}>
                          <Styled.BidNumber>0{index + 1}</Styled.BidNumber>
                          <Styled.BidPrice>
                            <Styled.EthIcon>{icons.eth}</Styled.EthIcon>
                            {item.price} ETH
                          </Styled.BidPrice>
                          <Styled.BidAction>Accept</Styled.BidAction>
                        </Styled.Bid>
                      ))
                    : "No Bids Yet"}
                </Styled.Bids>
              </Styled.ScrollBox>
            )}
            {activeTabIndex === 1 && (
              <Styled.PriceContainer>
                <Styled.AssetsPriceContainer>
                  <Styled.AssetCryptoPrice
                    type="number"
                    id="assetPrice"
                    name="assetPrice"
                    value={priceValue}
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </Styled.AssetsPriceContainer>
                <Styled.UpdateButton>Buy Now</Styled.UpdateButton>
              </Styled.PriceContainer>
            )}
          </Styled.BidsPriceContainer>
        </Styled.AssetDetailsPortion>
      </ModalLayout>
    );
  }
  return <></>;
};

export default OwnAssetModal;
