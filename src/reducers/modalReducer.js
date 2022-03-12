const initState = {
  ownAssetModalData: null,
  isOwnAssetModalOpen: false,
  nonOwnAssetModalData: null,
  isNonOwnAssetModalOpen: false,
  isFilterModalOpen: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_OWN_ASSET_MODAL_DATA":
      return { ...state, ownAssetModalData: action.payload };

    case "SET_NON_ASSET_MODAL_DATA":
      return { ...state, nonOwnAssetModalData: action.payload };

    case "OPEN_OWN_ASSET_MODAL":
      return { ...state, isOwnAssetModalOpen: true };

    case "CLOSE_OWN_ASSET_MODAL":
      return { ...state, isOwnAssetModalOpen: false };

    case "OPEN_NON_OWN_ASSET_MODAL":
      return { ...state, isNonOwnAssetModalOpen: true };

    case "CLOSE_NON_OWN_ASSET_MODAL":
      return { ...state, isNonOwnAssetModalOpen: false };

    case "OPEN_FILTER_MODAL":
      return { ...state, isFilterModalOpen: true };

    case "CLOSE_FILTER_MODAL":
      return { ...state, isFilterModalOpen: false };

    default:
      return state;
  }
};

export default modalReducer;
