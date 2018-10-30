import { PLACESEARCH_OPEN, PLACESEARCH_CLOSE } from '../actionTypes';

function placeSearchUpdaterAction(state: string) {
    switch (state) {
        case PLACESEARCH_OPEN:
            return { type: PLACESEARCH_CLOSE };
        case PLACESEARCH_CLOSE:
            return { type: PLACESEARCH_OPEN };
        default:
            return { type: PLACESEARCH_CLOSE };
    }
}

export default placeSearchUpdaterAction;