const initState = {
  isConnected: false,
  username: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONNECT":
      return { ...state, isConnected: true, username: action.payload };
    case "DISCONNECT":
      return { ...state, isConnected: false, username: "" };
    default:
      return state;
  }
};

export default authReducer;
