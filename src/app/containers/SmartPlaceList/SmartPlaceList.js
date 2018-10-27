import { connect } from "react-redux";
import PlaceList from '../../components/PlaceList/PlaceList';
// import placeAction from '../../store/actions/place';

const mapStateToProps = (state) => {
    return {
        places: state.placeReduce.places
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPlace: (action, object) => {
//             dispatch(placeAction(action, object));
//         }
//     }
// }

const SmartPlaceList = connect(mapStateToProps)(PlaceList);

export default SmartPlaceList;
