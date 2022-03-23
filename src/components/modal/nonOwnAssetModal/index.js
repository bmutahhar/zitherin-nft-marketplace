import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { ModalLayout, TraitMiniCard, PlainButton } from "../../../components";
import { closeNonOwnAssetModal } from "../../../actions";
import { icons } from "../../../utils/constants/icons";
import * as Styled from "./styled.components";

const NonOwnAssetModal = () => {
  const [counter, setCounter] = useState(1);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const modal = useSelector((state) => state.modal);
  const modalData = modal.nonOwnAssetModalData;
  const dispatch = useDispatch();

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  const closeModal = () => {
    dispatch(closeNonOwnAssetModal());
  };

  if (modalData) {
    return (
      <ModalLayout
        isOpen={modal.isNonOwnAssetModalOpen}
        closeHandler={closeModal}
      >
        <Styled.AssetImgPortion>
          <Styled.AssetImgContainer>
            <Styled.AssetImg src={modalData.image} />
          </Styled.AssetImgContainer>
          {!isMobileOrTablet && (
            <>
              <Styled.AssetsPriceContainer>
                <Styled.AssetCryptoPrice>
                  {Number(modalData.price).toFixed(4)} ETH
                </Styled.AssetCryptoPrice>
                {/* <Styled.AssetUsdPrice>
                  ${modalData.usd} USD
                </Styled.AssetUsdPrice> */}
              </Styled.AssetsPriceContainer>

              <PlainButton>Buy Now</PlainButton>
            </>
          )}
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

          {isMobileOrTablet && (
            <>
              <Styled.AssetsPriceContainer>
                <Styled.AssetCryptoPrice>
                  {modalData.price} ETH
                </Styled.AssetCryptoPrice>
                <Styled.AssetUsdPrice>
                  ${modalData.usd} USD
                </Styled.AssetUsdPrice>
              </Styled.AssetsPriceContainer>

              <PlainButton>Buy Now</PlainButton>
            </>
          )}

          <Styled.BidsPriceContainer>
            <Styled.TabsContainer>
              <Styled.Tab>Place a Bid</Styled.Tab>
            </Styled.TabsContainer>
            <Styled.BidContainer>
              <Styled.BidBox>
                <Styled.BidField
                  placeholder="E.g. 12.1 ETH"
                  id="bid"
                  name="bid"
                />
                <Styled.BidButtonContainer>
                  <Styled.BidButton>Bid</Styled.BidButton>
                </Styled.BidButtonContainer>
              </Styled.BidBox>
            </Styled.BidContainer>
          </Styled.BidsPriceContainer>
        </Styled.AssetDetailsPortion>
      </ModalLayout>
    );
  }
  return <></>;
};

export default NonOwnAssetModal;
