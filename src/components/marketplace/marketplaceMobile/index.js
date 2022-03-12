import React from "react";
import * as Styled from "./styled.components";
import { FilterButton, Search, Asset } from "../../../components";
import { assets } from "../../../mock";
import { icons } from "../../../utils/constants/icons";

const MarketplaceMobile = (props) => {
  return (
    <>
      <Styled.Container>
        <Styled.Title>Assets to Buy</Styled.Title>
        <Search
          fullWidth={true}
          rightIcon={<FilterButton onClick={props.handleFilterButtonClick} />}
        />
        <Styled.AssetsContainer>
          {assets.map((asset) => (
            <Asset
              asset={asset}
              key={asset.id}
              onClick={props.handleNonOwnAssetClick}
            />
          ))}
        </Styled.AssetsContainer>
        <Styled.TokensOpener>
          <Styled.ArrowUpIcon>{icons.arrowDoubleUp}</Styled.ArrowUpIcon>
          Tokens
        </Styled.TokensOpener>
        <Styled.Title>My Assets</Styled.Title>
        <Search
          fullWidth={true}
          rightIcon={<FilterButton onClick={props.handleFilterButtonClick} />}
        />
        <Styled.AssetsContainer>
          {assets.map((asset) => (
            <Asset
              asset={asset}
              key={asset.id}
              onClick={props.handleOwnAssetClick}
            />
          ))}
        </Styled.AssetsContainer>
      </Styled.Container>
    </>
  );
};

export default MarketplaceMobile;
