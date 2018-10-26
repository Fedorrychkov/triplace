import { combineReducers } from 'redux';
import {
    createStore,
} from 'redux';

import { headerUpdaterReduce } from './reducers/header';
import { welcomeReduce } from './reducers/welcome';

const reducer = combineReducers({
    headerUpdaterReduce,
    welcomeReduce
});

export const store = createStore(reducer);
