import { ADD_PLACE, GET_PLACE, GET_PLACES } from '../actionTypes';

const places = localStorage.getItem('triplace.places') ? JSON.parse(localStorage.getItem('triplace.places')) : [];

const initialState = {
    place: '',
    places: places
}

export default function placeReduce(state: any = initialState, action: any) {
    const placeList = localStorage.getItem('triplace.places') ? JSON.parse(localStorage.getItem('triplace.places')) : []
    switch (action.type) {
        case ADD_PLACE:
            places.push(action.place);
            localStorage.setItem('triplace.places', JSON.stringify(places));
            return { ...state, places: places };
        case GET_PLACES:
            return { ...state, places: placeList };
        case GET_PLACE:
            const place = placeList.filter((item) => item.id === action.id);
            return { ...state, place: place };
        default:
            return state;
    }
}
