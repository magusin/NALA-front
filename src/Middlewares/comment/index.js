import axios from 'axios';

import { fetchPostWithIdFromApi, FETCH_COMMENTS_WITH_ID_FROM_API, SEND_NEW_COMMENT } from '../../actions/api';
import { resetCommentFields } from '../../actions/comment';
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

      axiosInstance
        .post('/commentaires', {
          description: newComment,
          post: action.post_id,
          user: userId,
          display: true,
        })
        .then(
          (response) => {
            if (response.status === 201) {
              store.dispatch(resetCommentFields())
              store.dispatch(fetchPostWithIdFromApi(action.post_id));
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
