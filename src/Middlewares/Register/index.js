import axios from 'axios';
import { REGISTER_USER, saveUser } from '../../actions/api';


const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api/v1',
  },
);

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER: {
      const { newRegisterEmail, newRegisterPseudo, newRegisterPassword } = store.getState().connexionForm;
      axiosInstance
      .post(`/utilisateurs`, {
        email : newRegisterEmail,
        nickname : newRegisterPseudo,
        password : newRegisterPassword,
      },
      ).then(
        (response) => {
          console.log(response);
          store.dispatch(saveUser(response.data))
        },
      );
        next(action);
      break
    };
    default:
      next(action);
  }
};


export default registerMiddleware;
