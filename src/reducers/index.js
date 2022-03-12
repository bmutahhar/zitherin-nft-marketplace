import authReducer from "./authReducer";
import modalReducer from "./modalReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

export default reducers;
