import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';

import apiMiddleware from 'src/middleware/apiMiddleware';
import mockApiMiddleware from 'src/middleware/mockApiMiddleware';
import rootReducer from './state';

export const history = createBrowserHistory();

const middleware = [apiMiddleware, mockApiMiddleware];
const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  middleware.push(logger);
}

const composeEnhancers =
  NODE_ENV !== 'production' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const initialState = {};

const store = createStore(rootReducer, initialState, enhancers);

export default store;
