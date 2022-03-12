export const setOwnAssetModalData = (payload) => {
  return { type: "SET_OWN_ASSET_MODAL_DATA", payload: payload };
};

export const setNonOwnAssetModalData = (payload) => {
  return { type: "SET_NON_ASSET_MODAL_DATA", payload: payload };
};

export const openOwnAssetModal = () => {
  return { type: "OPEN_OWN_ASSET_MODAL" };
};

export const closeOwnAssetModal = () => {
  return { type: "CLOSE_OWN_ASSET_MODAL" };
};

export const openNonOwnAssetModal = () => {
  return { type: "OPEN_NON_OWN_ASSET_MODAL" };
};

export const closeNonOwnAssetModal = () => {
  return { type: "CLOSE_NON_OWN_ASSET_MODAL" };
};

export const openFilterModal = () => {
  return { type: "OPEN_FILTER_MODAL" };
};

export const closeFilterModal = () => {
  return { type: "CLOSE_FILTER_MODAL" };
};
