import { connect } from "react-redux";
import placeAction from '../../store/actions/place';
import PlacePage from '../../pages/PlacePage/PlacePage';

const mapStateToProps = (state) => {
    return {
        place: state.placeReduce.place
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlace: (object) => {
            dispatch(placeAction('GET_PLACE', object));
        }
    }
}

const SmartPlacePage = connect(mapStateToProps, mapDispatchToProps)(PlacePage);

export default SmartPlacePage;
