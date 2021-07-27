import { CAROUSEL_NEXT, CAROUSEL_PREVIOUS } from "src/actions/carousel";

const initialState = {
  carouselButton: '',
  pages:[],
  nextNewPages: '',
  nextNewpage:'',
  previousNewPages: '',
  previousNewpage:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CAROUSEL_PREVIOUS :

      let element = state.pages.find(type =>type.id == action.category);
      console.log(element)
      if(isset(element)){
        console.log('in')
      }
      let previous = action.page-1;

      const previousNewpage = {
              id: action.category,
              page: previous,
      }      

      const previousNewPages = [...state.pages, previousNewpage];

      return {
        ... state,
        pages : previousNewPages,
      }

    case CAROUSEL_NEXT :
      let element2 = state.pages.find(type =>type.id == action.category);

      console.log(element2)

      if(typeof element2 !== 'undefined'){

        element2.page = element2.page+1;

        console.log('in' + element2.id + "page" + element2.page)

        state.nextNewPages = [...state.pages, element2];

      }else if(typeof element2 == 'undefined'){

        let next = action.page+1;

        state.nextNewpage = {
          id: action.category,
          page: next,
        }
  
        state.nextNewPages = [...state.pages, state.nextNewpage];
      }

        return {
          ... state,
          pages : state.nextNewPages,
          nextNewpage:'',
          nextNewPages:'',
        }
      

    default:
      return state;
  }
};

export default reducer;
