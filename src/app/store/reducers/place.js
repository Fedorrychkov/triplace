import { ADD_PLACE, GET_PLACE, GET_PLACES, REMOVE_PLACE, ADD_PURPOSE, GET_PURPOSES } from '../actionTypes';

const places = localStorage.getItem('triplace.places') ? JSON.parse(localStorage.getItem('triplace.places')) : [];

const initialState = {
    place: '',
    places: places
}

export default function placeReduce(state: any = initialState, action: any) {
    const placeList = localStorage.getItem('triplace.places') ? JSON.parse(localStorage.getItem('triplace.places')) : []
    switch (action.type) {
        case ADD_PLACE:
            placeList.push(action.place);
            localStorage.setItem('triplace.places', JSON.stringify(placeList));
            return { ...state, places: placeList };
        case GET_PLACES:
            return { ...state, places: placeList };
        case GET_PLACE:
            const place = placeList.filter((item) => item.id === action.id);
            return { ...state, place: place };
        case REMOVE_PLACE:
            const placeLists = placeList.filter((item) => item.id !== action.id);
            localStorage.setItem('triplace.places', JSON.stringify(placeLists));
            return { ...state, places: placeLists };
        case ADD_PURPOSE:
            const placeLists2 = placeList.map(item => {
                if (item.id === action.placeId) {
                    if (!item.purposes) {
                        item.purposes = [];
                    }
                    item.purposes.push(action.purpose);
                    return item;
                }
                return item;
            });
            localStorage.setItem('triplace.places', JSON.stringify(placeLists2));
            return { ...state, place: placeLists2.filter(item => item.id === action.placeId) };
        case GET_PURPOSES:
            return { ...state, place: placeList.filter(item => item.id === action.placeId) };
        default:
            return state;
    }
}
