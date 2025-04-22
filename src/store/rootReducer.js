import { combineReducers } from "redux";
import languageReducer from "./features/language/languageSlice"
import emailSubscribeReducer from "./features/emailSubscribe/emailSubscribeSlice"

export default combineReducers({
  language: languageReducer,
  emailSubscribe: emailSubscribeReducer,
});
