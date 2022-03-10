const initState = {
  isConnected: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONNECT":
      return { ...state, isConnected: true };
    case "DISCONNECT":
      return { ...state, isConnected: false };
    default:
      return state;
  }
};

export default authReducer;
