import axios from 'axios';
import {  } from 'src/actions';
import { REGISTER_USER, saveUser } from '../../actions/api';


const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER: {
      const { newRegisterEmail, newRegisterPseudo, newRegisterPassword } = store.getState();
      axiosInstance
      .post(`/utlisateurs/${action.id}`, {
        newRegisterEmail,
        newRegisterPseudo,
        newRegisterPassword,
      })
      .then(
        (reponse) => {
          console.log(reponse);
          store.dispatch(saveUser(reponse.data.register))
        },
      ).catch(
        (error) => {
          console.log('error', error);
        },
      );
      break
    };
    default:
      next(action);
  }
};

export default registerMiddleware;
