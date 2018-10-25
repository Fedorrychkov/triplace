import { headerUpdaterAction } from '../../store/actions/header';
import { connect } from "react-redux";
import App from '../../App';

const mapStateToProps = (state) => {
    return {
        navIsOpen: state.headerUpdaterReduce.navIsOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateHeader: (headerAction) => {
            dispatch(headerUpdaterAction(headerAction));
        }
    }
}

const SmartApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default SmartApp;
