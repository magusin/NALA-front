import { connect } from 'react-redux';
import {changeDropdownState} from 'src/actions/navbar'
import Dropdown from 'src/components/Navbar/Dropdown';

const mapStateToProps = (state, ownProps) => ({
    dropdownOpen: state.navbar.dropdownOpen,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeDropdown: function(){
        dispatch(changeDropdownState())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
