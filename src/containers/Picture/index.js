import { connect } from 'react-redux';

import Picture from 'src/components/Picture';
import { fetchPostWithIdFromApi } from '../../actions/api';


const mapStateToProps = (state, ownProps) => ({
  isReady: state.picture.isReady,
  picture: state.picture.picture,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPostWithId: () => {
    dispatch(fetchPostWithIdFromApi(ownProps.match.params.id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
