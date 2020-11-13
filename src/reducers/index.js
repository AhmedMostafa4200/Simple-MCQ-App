// Root reducer

import { combineReducers } from "redux";

import QuestionReducer from "./QuestionReducer";

export default combineReducers({
  quest: QuestionReducer,
});
