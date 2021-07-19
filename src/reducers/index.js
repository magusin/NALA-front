import { CAROUSEL_NEXT, CAROUSEL_PREVIOUS } from "../actions";

const initialState = {
  carouselNumber : 1,
  carouselCat : 'top-love',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CAROUSEL_PREVIOUS :
      console.log('here')
      if(state[action.cat] == null){
        state[action.cat] = 1;
      }
      return {
        ... state,
        [action.cat] : state[action.cat]-1,
    }
    case CAROUSEL_NEXT :
      if(state[action.cat] == null){
        state[action.cat] = 1;
      }
     return {
          ... state,
         [action.cat] : state[action.cat]+1,
        };
    default:
      return state;
  }
};

export default reducer;
