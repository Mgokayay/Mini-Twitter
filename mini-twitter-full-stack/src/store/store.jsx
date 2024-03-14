import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { globalReducer } from "./reducers/globalReducers";

export const reducers = combineReducers({ global: globalReducer });
export const store = createStore(reducers, applyMiddleware(thunk, logger));
