import axios from 'axios';
import { Redirect } from 'react-router';

import {
  FETCH_CATEGORIES_FROM_API,
  FETCH_TOPLOVE_FROM_API,
  FETCH_POST_WITH_ID_FROM_API,
  FETCH_LAST_POST_FROM_API,
  FETCH_CATEGORY_FROM_API,
  ADD_LIKE,
  REMOVE_LIKE,
  FETCH_NEW_POST_FROM_API,
  FETCH_USER_POSTS_FROM_API,
  FETCH_DELETE_POST,
  fetchUserPostsFromApi,
} from '../../actions/api';
import { initialisationFields } from '../../actions/post';

import {
  saveCategories, saveCategoryWithId, saveLastPosts, saveLikeIt, savePostWithId, saveTopLove, saveUserPosts,
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
    case FETCH_NEW_POST_FROM_API:{
      const { addPicture } = store.getState().picture;
      const { title } = store.getState().post;
      const { userId } = store.getState().user;
      const { categorySelected } = store.getState().post;

      function getBase64 (file, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
      }
      
      let newPicture = '';
      
      getBase64(addPicture, (result) => {

        newPicture = result;

        let user_Id = parseInt(userId);

        console.log('base64', newPicture);
        console.log(title);
        console.log(user_Id);
        console.log(categorySelected);

        axiosInstance
        .post(`/post/`, {
          picture: newPicture,
          title: title,
          display: true,
          user: user_Id,
          category: categorySelected,
          pictureBase64: newPicture,
        })
        .then(
          (response) => {
            if(response.status === 201){
              store.dispatch(initialisationFields());
              <Redirect to="/profil"/>
            }
          },
        );
      }); 
      next(action);
      break; 
    }
    case ADD_LIKE: {
      const { userId } = store.getState().user;
      console.log('in', userId, action.postId);
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
    };
    case FETCH_DELETE_POST: {
      axiosInstance
        .delete(`/api/v1/post/${action.id}`)
        .then(
          (response) => {
            console.log(response)
            store.dispatch(fetchUserPostsFromApi())
          },
        );
      next(action);
      break;
    };
    case FETCH_USER_POSTS_FROM_API: {
      const { userId } = store.getState().user;
      axiosInstance
        .get(`/utilisateurs/${userId}/post`)
        .then(
          (response) => {
            console.log(response)
            store.dispatch(saveUserPosts(response.data))
          },
        );
      next(action);
      break;
    };
    case REMOVE_LIKE: {
      const { userId } = store.getState().user;
      console.log('in', userId, action.postId);
      axiosInstance
        .patch(`/post/${action.postId}/removelike/${userId}`)
        .then(
          (response) => {
            if (response.status === 200) {
              store.dispatch(removeLikeIt(response.data));
            }
          },
        );
      next(action);
      break;
    };
    default:
      next(action);
  }
};

export default postsMiddleware;
