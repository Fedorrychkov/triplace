import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { headerUpdaterReduce } from './reducers/header';
import { welcomeReduce } from './reducers/welcome';
import placeReduce from './reducers/place';
import placeSearchUpdaterReduce from './reducers/placeSearch';

// import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    headerUpdaterReduce,
    welcomeReduce,
    placeReduce,
    placeSearchUpdaterReduce
});

export const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

// sagaMiddleware.run(rootSaga);