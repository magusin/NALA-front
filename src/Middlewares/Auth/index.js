import axios from 'axios';
import { saveUserConnect } from '../../actions/saveData';
import { CONNECT_USER } from '../../actions/api';
import { LOGOUT_USER } from '../../actions/connexionForm';

const axiosInstance = axios.create(
  {
    baseURL: 'https://back.nos-amis-les-animaux.fr/api',
  },
);

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER: {
      const { newConnexionEmail, newConnexionPassword } = store.getState().connexionForm;
      axiosInstance
        .post('/login_check', {
          username: newConnexionEmail,
          password: newConnexionPassword,
        })
        .then(
          (response) => {
            store.dispatch(saveUserConnect(
              response.data.token,
              response.data.data.user.nickname,
              response.data.data.user.id,
              response.data.data.user.email,
              response.data.data.user.firstname,
              response.data.data.user.lastname,
              response.data.data.user.password,
            ));
            localStorage.setItem('myToken', response.data.token);
            localStorage.setItem('id', response.data.data.user.id);
            localStorage.setItem('nickname', response.data.data.user.nickname);
            localStorage.setItem('email', response.data.data.user.email);
            localStorage.setItem('firstname', response.data.data.user.firstname);
            localStorage.setItem('lastname', response.data.data.user.lastname);
            localStorage.setItem('password', response.data.data.user.password);
          },
        );
      next(action);
      break;
    }
    case LOGOUT_USER:
      localStorage.removeItem('myToken');
      next(action);
      break;

    default:
      next(action);
  }
};

export default authMiddleware;
