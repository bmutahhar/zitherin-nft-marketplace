import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  MarketplaceDesktop,
  MarketplaceMobile,
  OwnAssetModal,
  NonOwnAssetModal,
} from "../components";

const Marketplace = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const [isOwnAssetModalOpen, setIsOwnAssetModalOpen] = useState(false);
  const [ownAssetModalData, setOwnAssetModalData] = useState(null);

  const [isNonOwnAssetModalOpen, setIsNonOwnAssetModalOpen] = useState(true);
  const [nonOwnAssetModalData, setNonOwnAssetModalData] = useState(null);

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
    console.log("item: ", item);
    if (!nonOwnAssetModalData) {
      setNonOwnAssetModalData(item);
      setIsNonOwnAssetModalOpen(true);
    }
  };

  if (isMobileOrTablet) {
    return (
      <>
        <MarketplaceMobile
          handleOwnAssetClick={handleOwnAssetClick}
          handleNonOwnAssetClick={handleNonOwnAssetClick}
        />
        <OwnAssetModal
          isOpen={isOwnAssetModalOpen}
          closeHandler={closeOwnAssetModal}
          modalData={ownAssetModalData}
        />
        <NonOwnAssetModal
          isOpen={isNonOwnAssetModalOpen}
          closeHandler={closeNonOwnAssetModal}
          modalData={nonOwnAssetModalData}
        />
      </>
    );
  }
  return (
    <>
      <MarketplaceDesktop
        handleOwnAssetClick={handleOwnAssetClick}
        handleNonOwnAssetClick={handleNonOwnAssetClick}
      />
      <OwnAssetModal
        isOpen={isOwnAssetModalOpen}
        closeHandler={closeOwnAssetModal}
        modalData={ownAssetModalData}
      />
      <NonOwnAssetModal
        isOpen={isNonOwnAssetModalOpen}
        closeHandler={closeNonOwnAssetModal}
        modalData={nonOwnAssetModalData}
      />
    </>
  );
};

export default Marketplace;
