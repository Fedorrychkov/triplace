import { connect } from "react-redux";
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import placeAction from '../../store/actions/place';

const mapStateToProps = (state) => {
    return {
        places: state.placeReduce.places
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePlace: (object) => {
            dispatch(placeAction('REMOVE_PLACE', object));
            // dispatch(placeAction('GET_PLACES'));
        }
    }
}

const SmartPlaceItem = connect(mapStateToProps, mapDispatchToProps)(PlaceItem);

export default SmartPlaceItem;
