import React from "react";
import { useDispatch } from "react-redux";
import {
  openFilterModal,
  openNonOwnAssetModal,
  openOwnAssetModal,
  setNonOwnAssetModalData,
  setOwnAssetModalData,
} from "../../../actions";
import * as Styled from "./styled.components";
import { FilterButton, Search, Asset, Token } from "../../../components";

const MarketplaceMobile = ({
  isLoading,
  tokens,
  ownAssetData,
  nonOwnAssetData,
}) => {
  const dispatch = useDispatch();

  const handleFilterButtonClick = () => {
    dispatch(openFilterModal());
  };

  const handleNonOwnAssetClick = (data) => {
    dispatch(setNonOwnAssetModalData(data));
    dispatch(openNonOwnAssetModal());
  };

  const handleOwnAssetClick = (data) => {
    dispatch(setOwnAssetModalData(data));
    dispatch(openOwnAssetModal());
  };

  return (
    <>
      <Styled.Container>
        {/* Non Owned Tokens */}
        <Styled.Title>Assets to Buy</Styled.Title>
        <Search
          fullWidth={true}
          rightIcon={<FilterButton onClick={handleFilterButtonClick} />}
        />
        {isLoading && (
          <Styled.LoadingAssetContainer>
            {[1, 2, 3, 4].map((key) => (
              <Asset key={key} isLoading={isLoading} />
            ))}
          </Styled.LoadingAssetContainer>
        )}
        {!isLoading && (
          <Styled.AssetsContainer empty={nonOwnAssetData.length === 0}>
            {nonOwnAssetData.length > 0
              ? nonOwnAssetData.map((asset) => (
                  <Asset
                    asset={asset}
                    key={asset.id}
                    onClick={handleNonOwnAssetClick}
                  />
                ))
              : "No Assets Found"}
          </Styled.AssetsContainer>
        )}

        {/* User Tokens */}

        <Styled.Title>Tokens</Styled.Title>
        <Search
          fullWidth={true}
          rightIcon={<FilterButton onClick={handleFilterButtonClick} />}
        />
        {isLoading && (
          <Styled.LoadingAssetContainer>
            {[1, 2, 3, 4].map((key) => (
              <Token key={key} isLoading={isLoading} />
            ))}
          </Styled.LoadingAssetContainer>
        )}
        {!isLoading && (
          <Styled.AssetsContainer empty={tokens.length === 0}>
            {tokens.length > 0
              ? tokens.map((token) => <Token token={token} key={token.id} />)
              : "No Tokens Found"}
          </Styled.AssetsContainer>
        )}

        {/* My Assets */}

        <Styled.Title>My Assets</Styled.Title>
        <Search
          fullWidth={true}
          rightIcon={<FilterButton onClick={handleFilterButtonClick} />}
        />
        {isLoading && (
          <Styled.LoadingAssetContainer>
            {[1, 2, 3, 4].map((key) => (
              <Asset key={key} isLoading={isLoading} />
            ))}
          </Styled.LoadingAssetContainer>
        )}
        {!isLoading && (
          <Styled.AssetsContainer empty={ownAssetData.length === 0}>
            {ownAssetData.length > 0
              ? ownAssetData.map((asset) => (
                  <Asset
                    asset={asset}
                    key={asset.id}
                    onClick={handleOwnAssetClick}
                  />
                ))
              : "No Assets Found"}
          </Styled.AssetsContainer>
        )}
      </Styled.Container>
    </>
  );
};

export default MarketplaceMobile;
