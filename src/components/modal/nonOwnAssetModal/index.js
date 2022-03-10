import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ModalLayout, TraitMiniCard, PlainButton } from "../../../components";
import * as Styled from "./styled.components";
import { icons } from "../../../utils/constants/icons";

const NonOwnAssetModal = (props) => {
  const { modalData } = props;
  const [counter, setCounter] = useState(1);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  if (modalData) {
    return (
      <ModalLayout isOpen={props.isOpen} closeHandler={props.closeHandler}>
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
              <Styled.IncrementContainer>
                <Styled.IncrementIcon onClick={decrement}>
                  {icons.minus}
                </Styled.IncrementIcon>
                <Styled.IncrementCounter>{counter}</Styled.IncrementCounter>
                <Styled.IncrementIcon onClick={increment}>
                  {icons.plus}
                </Styled.IncrementIcon>
              </Styled.IncrementContainer>
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
            <Styled.TraitContainer>
              <TraitMiniCard
                traitName="Hero"
                traitValue="Common"
                bgColor="#466bf7"
                traitValueColor="#1B2960"
              />
              <TraitMiniCard
                traitName="Skin"
                traitValue="Normal"
                bgColor="#00C5E2"
                traitValueColor="#005E84"
              />
            </Styled.TraitContainer>
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
              <Styled.IncrementContainer>
                <Styled.IncrementIcon onClick={decrement}>
                  {icons.minus}
                </Styled.IncrementIcon>
                <Styled.IncrementCounter>{counter}</Styled.IncrementCounter>
                <Styled.IncrementIcon onClick={increment}>
                  {icons.plus}
                </Styled.IncrementIcon>
              </Styled.IncrementContainer>
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
