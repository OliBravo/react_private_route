import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./reducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk, logger];
const store = createStore(
  user,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;