const initState = [];

const activityReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return action.payload;

    case "CLEAR_ACTIVITIES":
      return [];
    default:
      return state;
  }
};

export default activityReducer;
