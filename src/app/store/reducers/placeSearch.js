import { PLACESEARCH_CLOSE, PLACESEARCH_OPEN } from '../actionTypes';

const initialState = {
    placeSearchIsOpen: false,
    placeSearchState: PLACESEARCH_CLOSE
}

function placeSearchUpdaterReduce(state: any = initialState, action: any) {
    switch (action.type) {
        case PLACESEARCH_OPEN:
            return { ...state, placeSearchIsOpen: true, placeSearchState: PLACESEARCH_OPEN };
        case PLACESEARCH_CLOSE:
            return { ...state, placeSearchIsOpen: false, placeSearchState: PLACESEARCH_CLOSE };
        default:
            return state;
    }
}

export default placeSearchUpdaterReduce;
