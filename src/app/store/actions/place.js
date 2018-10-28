import { ADD_PLACE, GET_PLACE, GET_PLACES } from '../actionTypes';

export default function placeAction(state: string, object) {
    switch (state) {
        case ADD_PLACE:
            return { type: ADD_PLACE, place: object.place };
        case GET_PLACES:
            return { type: GET_PLACES };
        case GET_PLACE:
            return { type: GET_PLACE, id: object.id };
        default:
            return { type: GET_PLACES };
    }
}
