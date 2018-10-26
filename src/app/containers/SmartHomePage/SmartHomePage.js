import { welcomeUpdaterAction } from '../../store/actions/welcome';
import { connect } from "react-redux";
import { HomePage } from '../../pages/Homepage/HomePage';

const mapStateToProps = (state) => {
    return {
        welcome: state.welcomeReduce
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWelcome: (welcomeAction) => {
            dispatch(welcomeUpdaterAction(welcomeAction));
        }
    }
}

const SmartHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default SmartHomePage;
