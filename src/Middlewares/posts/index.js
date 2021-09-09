import React from 'react';
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
  EDIT_POST_FROM_API,
  fetchPostWithIdFromApi,
} from '../../actions/api';
import { changeButtonUpload, initialisationFields, uploadNotificationMessage } from '../../actions/post';

import {
  saveCategories, saveCategoryWithId, saveLastPosts, savePostWithId, saveTopLove, saveUserPosts,
} from '../../actions/saveData';

const axiosInstance = axios.create(
  {
    baseURL: 'https://back.nos-amis-les-animaux.fr/api/v1',
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
      const { addPicture } = store.getState().post;
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
              store.dispatch(fetchUserPostsFromApi(user_Id));
              store.dispatch(initialisationFields());
              <Redirect to='profil'/>
              store.dispatch(uploadNotificationMessage(response.status, 'postAdd'));
              store.dispatch(changeButtonUpload());
            }
          }
        )
          .catch((error) => {
            store.dispatch(uploadNotificationMessage(error.name, 'postAdd'))
          });
      }); 
      next(action);
      break; 
    };
    case ADD_LIKE: {
      const { userId } = store.getState().user;
      axiosInstance
        .put(`/post/${action.postId}/like/${userId}`)
        .then(
          (response) => {
            if (response.status === 201) {
              store.dispatch(fetchPostWithIdFromApi(action.postId));
            }
          },
        );
      next(action);
      break;
    };
    case EDIT_POST_FROM_API:{
      const { title } = store.getState().post;
      const { categorySelected } = store.getState().post;
      const { userId } = store.getState().user;

        axiosInstance
        .patch(`/post/${action.id}`, {          
          title: title,
          category: categorySelected,
        })
        .then(
          (response) => {
            store.dispatch(uploadNotificationMessage(response.status));
            store.dispatch(initialisationFields());
            store.dispatch(fetchUserPostsFromApi(userId));
          },
        )
        .catch((error) => {
          store.dispatch(uploadNotificationMessage(error.name))
        });
 
      next(action);
      break; 
    };
    case FETCH_DELETE_POST: {
      axiosInstance
        .delete(`/post/${action.id}`)
        .then(
          (response) => {
            store.dispatch(uploadNotificationMessage(response.status));
            store.dispatch(fetchUserPostsFromApi());
          },
        )
        .catch((error) => {
          store.dispatch(uploadNotificationMessage(error.name))
        });
      next(action);
      break;
    };
    case FETCH_USER_POSTS_FROM_API: {
      const { userId } = store.getState().user;
      axiosInstance
        .get(`/utilisateurs/${userId}`)
        .then(
          (response) => {
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
            if (response.status === 201) {
              store.dispatch(fetchPostWithIdFromApi(action.postId));
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
