import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  openFilterModal,
  openNonOwnAssetModal,
  openOwnAssetModal,
  setNonOwnAssetModalData,
  setOwnAssetModalData,
} from "../../../actions";
import * as Styled from "./styled.components";
import { FilterButton, Search, Asset } from "../../../components";
import { sleep } from "../../../utils/helpers/misc";
import { assets } from "../../../mock";
import { icons } from "../../../utils/constants/icons";

const MarketplaceMobile = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    sleep(2000).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Styled.Container>
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
          <Styled.AssetsContainer>
            {assets.map((asset) => (
              <Asset
                asset={asset}
                key={asset.id}
                onClick={handleNonOwnAssetClick}
              />
            ))}
          </Styled.AssetsContainer>
        )}

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
          <Styled.AssetsContainer>
            {assets.map((asset) => (
              <Asset
                asset={asset}
                key={asset.id}
                onClick={handleOwnAssetClick}
              />
            ))}
          </Styled.AssetsContainer>
        )}
      </Styled.Container>
    </>
  );
};

export default MarketplaceMobile;
