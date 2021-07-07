import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { AnyAction } from "redux";
import { createLogger } from "redux-logger";
import { ThunkAction } from "redux-thunk";
import createRootReducer from "./reducers/rootReducer";

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const middleware = [...getDefaultMiddleware()];

const excludeLoggerEnvs = ["test", "production"];
const shouldIncludeLogger = !excludeLoggerEnvs.includes(
  process.env.NODE_ENV || ""
);

if (shouldIncludeLogger) {
  const logger = createLogger({
    level: "info",
    collapsed: true,
  });
  middleware.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// export type Store = ReturnType<typeof store>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;
