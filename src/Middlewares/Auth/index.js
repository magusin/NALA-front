import axios from 'axios';
import { saveUserConnect } from '../../actions/saveData';
import { CONNECT_USER } from '../../actions/api';
import { LOGOUT_USER } from '../../actions/connexionForm';

const axiosInstance = axios.create(
  {
    baseURL: 'http://ec2-54-197-127-233.compute-1.amazonaws.com/api',
    
  },
);

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER: {
    const { newConnexionEmail, newConnexionPassword} = store.getState().connexionForm;
      axiosInstance
      .post(`/login_check`, {
        username : newConnexionEmail,
        password : newConnexionPassword,
        
      })
      .then(
          (response) => {
            console.log(response);
            store.dispatch(saveUserConnect(response.data.token))
            localStorage.setItem('myToken', response.data.token);
          },
      );
        next(action)
      break; 
    };
    case LOGOUT_USER:
      localStorage.removeItem('myToken');
      next(action);
      break;

    default:
      next(action);
  }
};

export default authMiddleware;