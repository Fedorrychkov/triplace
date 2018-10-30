import placeSearchUpdaterAction from '../../store/actions/placeSearch';
import placeAction from '../../store/actions/place';

import { connect } from "react-redux";
import PlaceSearch from '../../components/ui/PlaceSearch/PlaceSearch';

const mapStateToProps = (state) => {
    return {
        placeSearchIsOpen: state.placeSearchUpdaterReduce.placeSearchIsOpen,
        placeSearchState: state.placeSearchUpdaterReduce.placeSearchState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlaceSearch: (action) => {
            dispatch(placeSearchUpdaterAction(action));
        },
        addPlace: (action, object) => {
            dispatch(placeAction(action, object));
            dispatch(placeAction('GET_PLACES'));
        }
    }
}

const SmartPlaceSearch = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(PlaceSearch);

export default SmartPlaceSearch;
