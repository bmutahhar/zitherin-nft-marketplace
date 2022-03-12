import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import activityReducer from "./activityReducer";
import marketplaceReducer from "./marketplaceReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  activities: activityReducer,
  marketplace: marketplaceReducer,
});

export default reducers;
