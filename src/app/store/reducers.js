import { combineReducers } from 'redux';
import {
    createStore,
} from 'redux';

import { headerUpdaterReduce } from './reducers/header';
import { welcomeReduce } from './reducers/welcome';
import placeReduce from './reducers/place';
import placeSearchUpdaterReduce from './reducers/placeSearch';


const reducer = combineReducers({
    headerUpdaterReduce,
    welcomeReduce,
    placeReduce,
    placeSearchUpdaterReduce
});

export const store = createStore(reducer);
