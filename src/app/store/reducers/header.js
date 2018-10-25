import { HEADER_OPEN, HEADER_CLOSE } from '../actionTypes';

const initialState = {
    navIsOpen: false
}

export function headerUpdaterReduce(state: any = initialState, action: any) {
    switch (action.type) {
        case HEADER_OPEN:
            return { ...state, navIsOpen: false };
        case HEADER_CLOSE:
            return { ...state, navIsOpen: true };
        default:
            return state;
    }
}
