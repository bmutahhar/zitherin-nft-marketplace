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
                  {modalData.price} ETH
                </Styled.AssetCryptoPrice>
                <Styled.AssetUsdPrice>
                  ${modalData.usd} USD
                </Styled.AssetUsdPrice>
              </Styled.AssetsPriceContainer>
            
              <PlainButton>Buy Now</PlainButton>
            </>
          )}
        </Styled.AssetImgPortion>
        <Styled.AssetDetailsPortion>
          <Styled.AssetHeader>
            <Styled.AssetTitleContainer>
              <Styled.AssetSubTitle>{modalData.battle}</Styled.AssetSubTitle>
              <Styled.AssetTitle>{modalData.name}</Styled.AssetTitle>
            </Styled.AssetTitleContainer>
          </Styled.AssetHeader>

          <Styled.AssetDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
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
                  placeholder="E.g. 121 ETH"
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
