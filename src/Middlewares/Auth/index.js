import axios from 'axios';
import { saveUser } from '../../actions/saveData';
import { CONNECT_USER } from '../../actions/api';

const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER: {
    const { newConnexionEmail, newConnexionPassword} = store.getState().connexionForm;
      axiosInstance
      .post(`/login_check`, {
        email : newConnexionEmail,
        passsword : newConnexionPassword,
      })
      .then(
        (response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.connexion))
          api.defaults.headers.common.Authorization = `bearer ${response.data.token}`
        },
      );
        next(action)
      break;
    };
    default:
      next(action);
  }
};

export default authMiddleware;