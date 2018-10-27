import { combineReducers } from 'redux';
import {
    createStore,
} from 'redux';

import { headerUpdaterReduce } from './reducers/header';
import { welcomeReduce } from './reducers/welcome';
import placeReduce from './reducers/place';

const reducer = combineReducers({
    headerUpdaterReduce,
    welcomeReduce,
    placeReduce
});

export const store = createStore(reducer);
