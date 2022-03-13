const initState = {
  isConnected: false,
  ownerAddress: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONNECT":
      return { ...state, isConnected: true, ownerAddress: action.payload };
    case "DISCONNECT":
      return { ...state, isConnected: false, ownerAddress: "" };
    default:
      return state;
  }
};

export default authReducer;
