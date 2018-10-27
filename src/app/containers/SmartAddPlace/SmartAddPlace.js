import { connect } from "react-redux";
import AddPlace from '../../components/AddPlace/AddPlace';
import placeAction from '../../store/actions/place';

const mapStateToProps = (state) => {
    return {
        place: state.placeReduce.place,
        places: state.placeReduce.places
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (action, object) => {
            dispatch(placeAction(action, object));
            dispatch(placeAction('GET_PLACES'));
        }
    }
}

const SmartAddPlace = connect(mapStateToProps, mapDispatchToProps)(AddPlace);

export default SmartAddPlace;
