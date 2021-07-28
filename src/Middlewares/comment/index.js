import { FETCH_COMMENTS_WITH_ID_FROM_API } from '../../actions/api';
import { saveCommentsWithPostId } from '../../actions/saveData';

const comments = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COMMENTS_WITH_ID_FROM_API:
      axiosInstance
      .get('/commentaires/')
      .then(
        (response) => {
          if(response.status == 200){
            console.log(response);
            store.dispatch(saveCommentsWithPostId(response.data));
          }
        },
      );
      next(action);
      break;
    default:
      next(action);
  }
};

export default comments;
