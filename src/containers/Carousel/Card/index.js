import { connect } from 'react-redux';

import Card from 'src/components/Carousel/Card';

const mapStateToProps = (state, ownProps) => ({
  picture: ownProps.picture,
  title: ownProps.title,
  cardId: ownProps.cardId,
  page: ownProps.page,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
