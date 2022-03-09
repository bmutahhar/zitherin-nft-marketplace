import React, { useState } from "react";
import { ModalLayout, TraitMiniCard } from "../../../components";
import * as Styled from "../styles";
import { icons } from "../../../utils/constants/icons";

const OwnAssetModal = (props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { modalData } = props;

  const changeTabHandler = (index) => setActiveTabIndex(index);
  if (modalData){
    return (
      <ModalLayout isOpen={props.isOpen} closeHandler={props.closeHandler}>
        <Styled.AssetImgPortion>
          <Styled.AssetImgContainer>
            <Styled.AssetImg src={modalData.image} />
          </Styled.AssetImgContainer>
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
            <Styled.ScrollBox>
              <Styled.Bids>
                {modalData.bids.map((item, index) => (
                  <Styled.Bid key={item.id}>
                    <Styled.BidNumber>0{index + 1}</Styled.BidNumber>
                    <Styled.BidPrice>
                      <Styled.EthIcon>{icons.eth}</Styled.EthIcon>
                      {item.price} ETH
                    </Styled.BidPrice>
                    <Styled.BidAction>Accept</Styled.BidAction>
                  </Styled.Bid>
                ))}
              </Styled.Bids>
            </Styled.ScrollBox>
          </Styled.BidsPriceContainer>
        </Styled.AssetDetailsPortion>
      </ModalLayout>
    );
                }
    return <></>
};

export default OwnAssetModal;
