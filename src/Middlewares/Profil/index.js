import axios from 'axios';
import { saveUserConnect } from '../../actions/saveData';
import { updateProfil, UPDATE_PROFIL, UPDATED_PROFIL } from '../../actions/profil';

const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const profilMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_PROFIL: {
      const { userId } = store.getState().user;
      const {
        profilPseudo,
        profilFirstname,
        profilName,
        profilEmail,
        profilPassword,
      } = store.getState().profil;
      axiosInstance
        .patch(`/utilisateurs/${userId}`, {
          nickname: profilPseudo,
          firstname: profilFirstname,
          lastname: profilName,
          email: profilEmail,
          password: profilPassword,
        })
        .then(
          (response) => {
            console.log(response);
          },
        );
      next(action);
      break;
    }
    case UPDATED_PROFIL: {
      const { userId } = store.getState().user;
      axiosInstance
        .get(`/utilisateurs/${userId}`)
        .then(
          (response) => {
            console.log(response);
            if (response.status === 200) {
              store.dispatch(saveUserConnect(response.data));
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

export default profilMiddleware;
