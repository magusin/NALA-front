import { connect } from 'react-redux';

import Carousel from 'src/components/Carousel';
import { carouselNext, carouselPrevious, } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  carousel: state.carousel,
  category: ownProps.category,
  number: ownProps.number,  
  list: state.list,
});



const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePrevious: function (category) {
    dispatch(carouselPrevious(category))
  },
  handleNext: function (category) {
    dispatch(carouselNext(category))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
