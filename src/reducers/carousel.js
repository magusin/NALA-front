import { CAROUSEL_NEXT, CAROUSEL_PREVIOUS } from "src/actions/carousel";

const initialState = {
  carouselButton: '',
  carousel:[
    {
      category:'top-love',
      name: 'Top Love',
      page: 2,
    },
    {
      category:'dernieres-publications',
      name: 'Dernières Publications',
      page: 10,
    },
  ],
  list:[
    {
      id : 1,
      url: 'https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17',
      title : 'mon chat est trop beau',
    },
    {
      id : 2,
      url: 'https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17',
      title : 'card 2',
    },
    {
      id : 3,
      url: 'https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17',
      title : 'card 3',
    },
    {
      id : 10,
      url: 'https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1140x480.jpg?v=17',
      title : 'card 10',
    },
  ]
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CAROUSEL_PREVIOUS :
      let previous = state.carousel.find(type => type.category === action.category );
      previous.page--;
        return {
          ... state,
          carousel : [
            ...state.carousel
          ],
          carouselButton:'previous',
        }

    case CAROUSEL_NEXT :
      let next = state.carousel.find(type => type.category === action.category );
      next.page++;
      return {
        ... state,
        carousel : [
          ...state.carousel
        ],
        carouselButton:'next',
      }
    default:
      return state;
  }
};

export default reducer;
