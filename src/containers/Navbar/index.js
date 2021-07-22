import { connect } from 'react-redux';
import { displayDropdown, notDisplayDropdown } from 'src/actions/navbar';

import Navbar from 'src/components/Navbar/Navbar';

const mapStateToProps = (state, ownProps) => ({
  dropdownSelect: state.navbar.dropdownSelect,
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDisplayDropdown:function(){
    dispatch(displayDropdown())
},
  handleNotDisplayDropdown:function(){
    dispatch(notDisplayDropdown())
},
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

