import axios from 'axios';

import { FETCH_COMMENTS_WITH_ID_FROM_API, SEND_NEW_COMMENT } from '../../actions/api';
import { saveCommentsWithPostId, saveNewComment } from '../../actions/saveData';

const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const commentsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COMMENTS_WITH_ID_FROM_API: {
      axiosInstance
        .get('/commentaires/')
        .then(
          (response) => {
            if (response.status === 200) {
              console.log(response);
              store.dispatch(saveCommentsWithPostId(response.data));
            }
          },
        );
      next(action);
      break;
    }
    case SEND_NEW_COMMENT: {
      const { userId } = store.getState().user;
      const { newComment } = store.getState().comment;
      console.log('middleware');
      axiosInstance
        .post('/commentaires', {
          description: newComment,
          post: action.post_id,
          user: userId,
          display: true,
        })
        .then(
          (response) => {
            if (response.status === 200) {
              console.log(response);
              store.dispatch(saveNewComment(response.data));
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

export default commentsMiddleware;
