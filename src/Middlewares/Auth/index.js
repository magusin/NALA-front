import axios from 'axios';
import {  } from 'src/actions';
import { CONNECT_USER, saveUser } from '../../actions/api';


const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER: {
    const { newConnexionEmail, newConnexionPassword} = store.getState();
      axiosInstance
      .post(`/connexion`, {
        email: 'arnaud@test.fr',
        password: 'arnaud',
      })
      .then(
        (response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.connexion))
        },
      ).catch(
        (error) => {
          console.log('error', error);
        },
      );
      break;
    };
    default:
      next(action);
  }
};

export default authMiddleware;