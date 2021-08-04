import { connect } from 'react-redux';

import Card from 'src/components/Carousel/Card';

const mapStateToProps = (state, ownProps) => ({
  picture: ownProps.picture,
  title: ownProps.title,
  cardId: ownProps.cardId,
  cardPage: ownProps.cardPage,
  page: ownProps.page,
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps, null)(Card);
