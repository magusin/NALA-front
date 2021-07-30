import axios from 'axios';

import {
  FETCH_CATEGORIES_FROM_API,
  FETCH_TOPLOVE_FROM_API,
  FETCH_POST_WITH_ID_FROM_API,
  FETCH_LAST_POST_FROM_API,
  FETCH_CATEGORY_FROM_API,
  ADD_LIKE,
  REMOVE_LIKE,
} from '../../actions/api';

import {
  saveCategories, saveCategoryWithId, saveLastPosts, saveLikeIt, savePostWithId, saveTopLove,
} from '../../actions/saveData';

const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const postsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LAST_POST_FROM_API: {
      axiosInstance
        .get('/post/last10')
        .then(
          (response) => {
            if (response.status === 200) {
              store.dispatch(saveLastPosts(response.data));
            }
          },
        );
      next(action);
      break;
    }
    case FETCH_CATEGORIES_FROM_API: {
      axiosInstance
        .get('/categories')
        .then(
          (response) => {
            if (response.status === 200) {
              store.dispatch(saveCategories(response.data));
            }
          },
        );
      next(action);
      break;
    }
    case FETCH_TOPLOVE_FROM_API: {
      axiosInstance
        .get('post/toplove')
        .then(
          (response) => {
            console.log(response)
            if (response.status === 200) {
              store.dispatch(saveTopLove(response.data));
            }
          },
        );
      next(action);
      break;
    }
    case FETCH_POST_WITH_ID_FROM_API: {
      axiosInstance
        .get(`/post/${action.id}`)
        .then(
          (response) => {
            if (response.status === 200) {
              store.dispatch(savePostWithId(response.data));
            }
          },
        );
      next(action);
      break;
    }
    case FETCH_CATEGORY_FROM_API: {
      axiosInstance
        .get(`/categories/${action.id}`)
        .then(
          (response) => {
            if (response.status === 200) {
              store.dispatch(saveCategoryWithId(response.data));
            }
          },
        );
      next(action);
      break;
    }
    case ADD_LIKE: {
      const { userId } = store.getState().user;
      console.log('in');
      axiosInstance
        .put(`/post/${action.postId}/like/${userId}`)
        .then(
          (response) => {
            if (response.status === 200) {
              store.dispatch(saveLikeIt(response.data));
            }
          },
        );
      next(action);
      break;
    }
    case REMOVE_LIKE: {
      const { userId } = store.getState().user;
      console.log('in');
      axiosInstance
        .patch(`/post/${action.postId}/like/${userId}`)
        .then(
          (response) => {
            if (response.status === 200) {
              store.dispatch(removeLikeIt(response.data));
            }
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
