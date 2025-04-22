import { combineReducers } from "redux";
import languageReducer from "./features/language/languageSlice"
import emailSubscribeReducer from "./features/emailSubscribe/emailSubscribeSlice"
import teamSlice from "./features/OurTeam/teamSlice"

export default combineReducers({
  language: languageReducer,
  emailSubscribe: emailSubscribeReducer,
  ourTeams: teamSlice,
});
