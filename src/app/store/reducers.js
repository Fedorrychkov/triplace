import { combineReducers } from 'redux';
import {
    createStore,
} from 'redux';

import { headerUpdaterReduce } from './reducers/header';

const reducer = combineReducers({
    headerUpdaterReduce
});

export const store = createStore(reducer);
