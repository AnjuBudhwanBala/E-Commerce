import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

// Logger with default options
import logger from 'redux-logger';
export const store = createStore(rootReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
