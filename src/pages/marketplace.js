import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MarketplaceDesktop, MarketplaceMobile } from "../components";

const Marketplace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleOwnAssetClick = (item) => {
    console.log("item: ",item);
    if (!modalData) {
      setModalData(item);
      setIsModalOpen(true);
    }
  };
  if (isMobileOrTablet) {
    return (
      <MarketplaceMobile
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        onClick={handleOwnAssetClick}
        modalData={modalData}
      />
    );
  }
  return (
    <MarketplaceDesktop
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      onClick={handleOwnAssetClick}
      modalData={modalData}
    />
  );
};

export default Marketplace;
