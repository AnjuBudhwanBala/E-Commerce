import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
// Logger with default options
import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// then run the saga
//sagaMiddleware.run();

export const persistor = persistStore(store);
