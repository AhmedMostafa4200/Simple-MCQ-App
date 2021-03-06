import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";

const initialState = {};

export default createStore(
  rootReducer,
  initialState,
  compose(
    // applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
