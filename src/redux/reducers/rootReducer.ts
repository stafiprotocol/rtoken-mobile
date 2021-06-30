import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import globalReducer from "./globalClice";
import rETHReducer from "./rETHClice";

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    globalModule: globalReducer,
    rETHModule: rETHReducer,
  });
}
