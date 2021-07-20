import { CAROUSEL_NEXT, CAROUSEL_PREVIOUS } from "../actions";

const initialState = {
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
  ]
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CAROUSEL_PREVIOUS :
      //doit enlever un page du action.category défini
      console.log('toto',action)
      let car = state.carousel.find(type => type.category === action.category )
      console.log(car)

      state.carousel
        return {
          ... state,
        }

    case CAROUSEL_NEXT :
      //doit ajouter un page du action.category défini
       return {
          ... state,

       };

    default:
      return state;
  }
};

export default reducer;
