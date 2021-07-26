import axios from 'axios';

import { FETCH_CATEGORIES_FROM_API, FETCH_TOPLOVE_FROM_API, FETCH_POST_WITH_ID_FROM_API } from '../../actions/api';
import { saveCategories, savePostWithId } from '../../actions/saveData'

const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_FROM_API: {
      axiosInstance
      .get('/categories')
      .then(
        (response) => {
          console.log(response);
          store.dispatch(saveCategories(response.data.categories));
        },
      );
      next(action);
      break;
    }; 
    case FETCH_TOPLOVE_FROM_API: {
      
      axiosInstance
      .get('/toplove')
      .then(
        (response) => {
          console.log(response);
          // store.dispatch(savetopLove(response.data.topLove));
        },
      );
      next(action);
      break;
    }; 
    case FETCH_POST_WITH_ID_FROM_API: {
      console.log(action.id);
      axiosInstance
      .get(`/post/${action.id}`)
      .then(
        (response) => {
          console.log(response);
          store.dispatch(savePostWithId(response.data));
        },
      );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default postsMiddleware;
