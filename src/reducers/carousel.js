import { CAROUSEL_NEXT, CAROUSEL_PREVIOUS } from "src/actions/carousel";

const initialState = {
  carouselButton: '',
  pages: '',
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
      console.log(typeof state.pages)
      if(typeof state.pages != 'object'){
        console.log('je crée');
        action.newPage = {
          id: action.category,
          page: next,
        };
        return{
          ...state,
          pages: [action.newPage],
        }
      }else{
        console.log('je modifie');
        action.newPage = state.pages.map(
          selectedPage => {
            console.log('ma page :' + selectedPage);
            if(selectedPage.id == action.category){
              console.log('si je la trouve');
              selectedPage.page = next;
            }else{
              console.log('sinon je la crée');
              selectedPage = {
                id: action.category,
                page: next,
              }
            }
          }
        ); 
        

        console.log('mon résultat', action.newPage)
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
