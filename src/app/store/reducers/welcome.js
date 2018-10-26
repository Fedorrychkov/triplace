import { SHOW_WELCOME, HIDE_WELCOME } from '../actionTypes';

let hasVisit = localStorage.getItem('triplace.has_visited');
hasVisit = hasVisit === null ? 1 : 0;
// console.log(hasVisit, hasVisit, !!hasVisit === true );
const initialState = {
    welcomeIsShow: !!hasVisit === true ? true : false,
    welcomeState: SHOW_WELCOME // TODO: Change Type from Bool
}

export function welcomeReduce(state: any = initialState, action: any) {
    switch (action.type) {
        case HIDE_WELCOME:
            localStorage.setItem('triplace.has_visited', 1)
            return { ...state, welcomeIsShow: false, welcomeState: HIDE_WELCOME };
        case SHOW_WELCOME:
            localStorage.setItem('triplace.has_visited', 0)
            return { ...state, welcomeIsShow: true, welcomeState: SHOW_WELCOME };
        default:
            return state;
    }
}
