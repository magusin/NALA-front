import { connect } from 'react-redux';

import Comments from 'src/components/Picture/Comment';

const mapStateToProps = (state, ownProps) => ({
  nickname: ownProps.nickname,
  description: ownProps.description,
  createdAt: ownProps.createdAt,
  displayComments: ownProps.displayComments,
});

export default connect(mapStateToProps, null)(Comments);
