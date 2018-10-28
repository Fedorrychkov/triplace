import { connect } from "react-redux";
import PlaceList from '../../components/PlaceList/PlaceList';
import placeAction from '../../store/actions/place';

const mapStateToProps = (state) => {
    return {
        places: state.placeReduce.places
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlace: (object) => {
            dispatch(placeAction('GET_PLACE', object));
        },
    }
}

const SmartPlaceList = connect(mapStateToProps, mapDispatchToProps)(PlaceList);

export default SmartPlaceList;
