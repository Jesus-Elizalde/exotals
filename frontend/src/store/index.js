import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sessionReducer from "./session";
import carReducer from "./cars";
import makeReducer from "./makes";
import modelReducer from "./models";
import utilDataReducer from "./utildata";
import reviewReducer from "./reviews";
import favoriteReducer from "./favorites";

const rootReducer = combineReducers({
  session: sessionReducer,
  cars: carReducer,
  makes: makeReducer,
  models: modelReducer,
  utildata: utilDataReducer,
  reviews: reviewReducer,
  favorites: favoriteReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
