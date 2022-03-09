import React from "react";
import * as Styled from "./styled.components";
import {
  FilterButton,
  Search,
  Asset,
  Footer,
  OwnAssetModal,
} from "../../../components";
import { assets } from "../../../mock";
import { icons } from "../../../utils/constants/icons";

const MarketplaceMobile = (props) => {
  console.log(props)
  return (
    <>
      <Styled.Container>
        <Styled.Title>Assets to Buy</Styled.Title>
        <Search fullWidth={true} rightIcon={<FilterButton />} />
        <Styled.AssetsContainer>
          {assets.map((asset) => (
            <Asset asset={asset} key={asset.id} onClick={props.onClick} />
          ))}
        </Styled.AssetsContainer>
        <Styled.TokensOpener>
          <Styled.ArrowUpIcon>{icons.arrowDoubleUp}</Styled.ArrowUpIcon>
          Tokens
        </Styled.TokensOpener>
        <Styled.Title>My Assets</Styled.Title>
        <Search fullWidth={true} rightIcon={<FilterButton />} />
        <Styled.AssetsContainer>
          {assets.map((asset) => (
            <Asset asset={asset} key={asset.id} onClick={props.onClick} />
          ))}
        </Styled.AssetsContainer>
        <Footer />
      </Styled.Container>
      <OwnAssetModal
        isOpen={props.isModalOpen}
        closeHandler={props.closeModal}
        modalData={props.modalData}
      />
    </>
  );
};

export default MarketplaceMobile;
