import { connect } from "react-redux";

import placeAction from '../../store/actions/place';
import { headerUpdaterAction } from '../../store/actions/header';

import PlacePage from '../../pages/PlacePage/PlacePage';

const mapStateToProps = (state) => {
    return {
        place: state.placeReduce.place,
        navIsOpen: state.headerUpdaterReduce.navIsOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlace: (object) => {
            dispatch(placeAction('GET_PLACE', object));
        },
        getPurposes: (object) => {
            dispatch(placeAction('GET_PURPOSES', object));
        },
        addPurpose: (object) => {
            dispatch(placeAction('ADD_PURPOSE', object));
        },
        updateHeader: (headerAction) => {
            dispatch(headerUpdaterAction(headerAction));
        }
    }
}

const SmartPlacePage = connect(mapStateToProps, mapDispatchToProps)(PlacePage);

export default SmartPlacePage;
