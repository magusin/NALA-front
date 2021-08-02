import axios from 'axios';
import { UPDATE_PROFIL } from '../../actions/profil';

const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_PROFIL: {
      const { userId } = store.getState().user;
      const { profilPseudo, profilFirstname, profilName } = store.getState().profil;
      axiosInstance
        .patch(`/utlisateurs/${userId}`, {
          nickname: profilPseudo,
          firstname: profilFirstname,
          lastname: profilName,
        }).then(
          (response) => {
            console.log(response);
          },
        );
    }
      next(action);
      break;
    default:
      next(action);
  }
};

export default profilMiddleware;
