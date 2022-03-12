import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  MarketplaceDesktop,
  MarketplaceMobile,
  OwnAssetModal,
  NonOwnAssetModal,
  FilterModal,
  Footer,
} from "../components";
import {
  setNonOwnAssetModalData,
  setOwnAssetModalData,
  openNonOwnAssetModal,
  openOwnAssetModal,
} from "../actions";

const Marketplace = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [isOwnAssetModalOpen, setIsOwnAssetModalOpen] = useState(false);
  const [ownAssetModalData, setOwnAssetModalData] = useState(null);

  const [isNonOwnAssetModalOpen, setIsNonOwnAssetModalOpen] = useState(true);
  const [nonOwnAssetModalData, setNonOwnAssetModalData] = useState(null);



  const handleOwnAssetClick = (item) => {
    if (!ownAssetModalData) {
      setOwnAssetModalData(item);
      setIsOwnAssetModalOpen(true);
    }
  };



  const handleNonOwnAssetClick = (item) => {
    if (!modal.nonOwnAssetModalData) {
      dispatch(setNonOwnAssetModalData(item));
      dispatch(openNonOwnAssetModal());
    }
  };

  if (isMobileOrTablet) {
    return (
      <>
        <MarketplaceMobile
          handleOwnAssetClick={handleOwnAssetClick}
          handleNonOwnAssetClick={handleNonOwnAssetClick}
        />
        <Footer />
        {modal.isOwnAssetModalOpen && <OwnAssetModal />}
        {modal.isNonOwnAssetModalOpen && <NonOwnAssetModal />}
        {modal.isFilterModalOpen && <FilterModal />}
      </>
    );
  }
  return (
    <>
      <MarketplaceDesktop />
      <Footer />
      {modal.isOwnAssetModalOpen && <OwnAssetModal />}
      {modal.isNonOwnAssetModalOpen && <NonOwnAssetModal />}
      {modal.isFilterModalOpen && <FilterModal />}
    </>
  );
};

export default Marketplace;
