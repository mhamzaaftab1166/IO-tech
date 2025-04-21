import { combineReducers } from "redux";
import languageReducer from "./features/language/languageSlice"

export default combineReducers({
  language: languageReducer,
});
