import { CAROUSEL_NEXT, CAROUSEL_PREVIOUS } from "src/actions/carousel";

const initialState = {
  carouselButton: '',
  pages:[],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CAROUSEL_PREVIOUS :

      let previous = action.page-1;

      newPages = state.pages.map(
        page => {
          if(page.find(type =>type.id == action.category)){
            page.page = previous;
          }else{
            page = {
              id: action.category,
              page: previous,
            }
          }
        }
      );
      
      console.log(newPages);

      return {
        ... state,
        pages : newPages,
      }

    case CAROUSEL_NEXT :

      let next = action.page+1;

      if(typeof state.pages == 'undefined'){
        action.newPage = [{
          id: action.category,
          page: next,
        }];
        return{
          ...state,
          pages: action.newPage,
        }
      }else{
        action.newPage = state.pages.map(
          page => {
            console.log(page.id);
            if(page.id == action.category){
              page.page = next;
            }else{
              page = {
                id: action.category,
                page: next,
              }
            }
          }
        ); 
        return {
          ... state,
          pages : action.newPages,
        }       
      };
 
    default:
      return state;
  }
};

export default reducer;
