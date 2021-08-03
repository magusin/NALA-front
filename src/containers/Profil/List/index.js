import { connect } from 'react-redux';

import List from 'src/components/Profil/List';
import { fetchUserPostsFromApi } from '../../../actions/api';

const mapStateToProps = (state, ownProps) => ({
  userPosts: state.user.userPosts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserPosts: function (){
    dispatch(fetchUserPostsFromApi());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
