import { connect } from 'react-redux';

import Carousel from 'src/components/Carousel';
import { carouselNext, carouselPrevious, } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  carousel: state.carousel,
  category: ownProps.category,
  number: ownProps.number,  
});



const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePrevious: function () {
    dispatch(carouselPrevious(category))
  },
  handleNext: function () {
    dispatch(carouselNext(category))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
