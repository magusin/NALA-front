import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Picture from 'src/components/Picture';
import { fetchPostWithIdFromApi } from '../../actions/api';


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPostWithId: () => {
    dispatch(fetchPostWithIdFromApi(ownProps.match.params.id))
  }
});

const pictureConnectToTheStore = connect(mapStateToProps, mapDispatchToProps)(Picture);

export default withRouter(pictureConnectToTheStore);
