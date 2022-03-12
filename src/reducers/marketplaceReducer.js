const initState = {
  ownAssets: [],
  nonOwnAssets: [],
  tokens: [],
};

const marketplaceReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_OWN_ASSETS":
      return { ...state, ownAssets: action.payload };
    case "SET_NON_OWN_ASSETS":
      return { ...state, nonOwnAssets: action.payload };
    case "SET_TOKENS":
      return { ...state, tokens: action.payload };
    default:
      return state;
  }
};

export default marketplaceReducer;
