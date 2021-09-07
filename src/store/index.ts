import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import appSlice from './slices/appSlice';
import layoutSlice from './slices/layoutSlice';
import authSlice from './slices/authSlice';

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk];

const store = configureStore({
  reducer: {
    router: connectRouter(history),
    app: appSlice,
    layout: layoutSlice,
    auth: authSlice,
  },
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
