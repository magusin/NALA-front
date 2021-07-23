import { connect } from 'react-redux';

import Card from 'src/components/Carousel/Card';
import { fetchPostWithIdFromApi } from 'src/actions/api';

const mapStateToProps = (state, ownProps) => ({
  picture: ownProps.picture,
  title: ownProps.title,
  cardId: ownProps.cardId,
  page: ownProps.page,
  buttonEffect: state.carousel.carouselButton,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
