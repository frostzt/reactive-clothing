import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middlewares = [logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

const reduxStore = { store, persistor };

export default reduxStore;
