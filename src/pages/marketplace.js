import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  MarketplaceDesktop,
  MarketplaceMobile,
  OwnAssetModal,
  NonOwnAssetModal,
  FilterModal,
} from "../components";

const Marketplace = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const [isOwnAssetModalOpen, setIsOwnAssetModalOpen] = useState(false);
  const [ownAssetModalData, setOwnAssetModalData] = useState(null);

  const [isNonOwnAssetModalOpen, setIsNonOwnAssetModalOpen] = useState(true);
  const [nonOwnAssetModalData, setNonOwnAssetModalData] = useState(null);

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const closeOwnAssetModal = () => {
    setIsOwnAssetModalOpen(false);
    setOwnAssetModalData(null);
  };

  const handleOwnAssetClick = (item) => {
    if (!ownAssetModalData) {
      setOwnAssetModalData(item);
      setIsOwnAssetModalOpen(true);
    }
  };

  const closeNonOwnAssetModal = () => {
    setIsNonOwnAssetModalOpen(false);
    setNonOwnAssetModalData(null);
  };

  const handleNonOwnAssetClick = (item) => {
    if (!nonOwnAssetModalData) {
      setNonOwnAssetModalData(item);
      setIsNonOwnAssetModalOpen(true);
    }
  };

  const handleFilterButtonClick = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => setIsFilterModalOpen(false);

  if (isMobileOrTablet) {
    return (
      <>
        <MarketplaceMobile
          handleOwnAssetClick={handleOwnAssetClick}
          handleNonOwnAssetClick={handleNonOwnAssetClick}
          handleFilterButtonClick={handleFilterButtonClick}
        />
        {isOwnAssetModalOpen && (
          <OwnAssetModal
            isOpen={isOwnAssetModalOpen}
            closeHandler={closeOwnAssetModal}
            modalData={ownAssetModalData}
          />
        )}
        {isNonOwnAssetModalOpen && (
          <NonOwnAssetModal
            isOpen={isNonOwnAssetModalOpen}
            closeHandler={closeNonOwnAssetModal}
            modalData={nonOwnAssetModalData}
          />
        )}
        {isFilterModalOpen && (
          <FilterModal
            isOpen={isFilterModalOpen}
            closeHandler={closeFilterModal}
          />
        )}
      </>
    );
  }
  return (
    <>
      <MarketplaceDesktop
        handleOwnAssetClick={handleOwnAssetClick}
        handleNonOwnAssetClick={handleNonOwnAssetClick}
        handleFilterButtonClick={handleFilterButtonClick}
      />
      {isOwnAssetModalOpen && (
        <OwnAssetModal
          isOpen={isOwnAssetModalOpen}
          closeHandler={closeOwnAssetModal}
          modalData={ownAssetModalData}
        />
      )}
      {isNonOwnAssetModalOpen && (
        <NonOwnAssetModal
          isOpen={isNonOwnAssetModalOpen}
          closeHandler={closeNonOwnAssetModal}
          modalData={nonOwnAssetModalData}
        />
      )}
      {isFilterModalOpen && (
        <FilterModal
          isOpen={isFilterModalOpen}
          closeHandler={closeFilterModal}
        />
      )}
    </>
  );
};

export default Marketplace;
