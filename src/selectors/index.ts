import {
    Middleware,
    MiddlewareAPI,
    combineReducers,
    configureStore,
    isRejectedWithValue,
  } from '@reduxjs/toolkit';
import usersReducer from "src/reducers/usersReducer";
import { listenerMiddleware } from './listenerMiddleware';

const appReducer = combineReducers ({
    users: usersReducer,
});

export const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'login': {
            const {
                user,
            } = state;
        }
    };

    return appReducer({} as any, action);
};

const errorLoggingMiddleware: Middleware =
  (_: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      // logger.logError(action.payload);
    }

    return next(action);
  };

export const setupStore = (preloadedState?: Partial<AppState>) => {
    return configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
          immutableCheck: { warnAfter: 128 },
          serializableCheck: false,
        })
          .concat(errorLoggingMiddleware)
          .prepend(listenerMiddleware.middleware);
      },
      devTools: true,
      preloadedState,
    });
  };

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];