import { connect } from 'react-redux';

import Carousel from 'src/components/Carousel';
import { carouselNext, carouselPrevious, } from 'src/actions/carousel';

const mapStateToProps = (state, ownProps) => ({
  pages: state.pages,
});



const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePrevious: function (category, page) {
    dispatch(carouselPrevious(category, page))
  },
  handleNext: function (category, page) {
    dispatch(carouselNext(category, page))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
