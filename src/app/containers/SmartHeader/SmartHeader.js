import { headerUpdaterAction } from '../../store/actions/header';
import { connect } from "react-redux";
import { Header } from '../../components/Header/Header';

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

const SmartHeader = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header);

export default SmartHeader;
