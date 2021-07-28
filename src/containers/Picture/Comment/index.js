import { connect } from 'react-redux';

import Comments from 'src/components/Picture/Comment';

const mapStateToProps = (state, ownProps) => ({
  user : ownProps.user,
  description : ownProps.description,
  createdAt: ownProps.createdAt,
  displayComments: ownProps.displayComments,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
