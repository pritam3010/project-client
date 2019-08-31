import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../history";
import reducers from "./reducers";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
);
const store = createStore(reducers(history), enhancer);

export default store;
