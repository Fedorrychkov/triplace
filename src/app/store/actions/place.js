import { ADD_PLACE, GET_PLACE, GET_PLACES, REMOVE_PLACE, ADD_PURPOSE, GET_PURPOSES } from '../actionTypes';

export default function placeAction(state: string, object) {
    switch (state) {
        case ADD_PLACE:
            return { type: ADD_PLACE, place: object.place };
        case GET_PLACES:
            return { type: GET_PLACES };
        case GET_PLACE:
            return { type: GET_PLACE, id: object.id };
        case REMOVE_PLACE:
            return { type: REMOVE_PLACE, id: object.id };
        case ADD_PURPOSE:
            return { type: ADD_PURPOSE, placeId: object.placeId, purpose: object }
        case GET_PURPOSES:
            return { type: GET_PURPOSES, placeId: object.placeId }
        default:
            return { type: GET_PLACES };
    }
}
