import { combineReducers } from "redux";
import { setFrontPageDataReducer, setShopsDataReducer } from "./reducers";
const reducers = combineReducers({
  frontPageData: setFrontPageDataReducer,
  shopsData: setShopsDataReducer
});
export default reducers;