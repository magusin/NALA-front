import axios from 'axios';
import { saveUserRegister } from '../../actions/saveData';
import { REGISTER_USER } from '../../actions/api';

const axiosInstance = axios.create(
  {
    baseURL: 'https://back.nos-amis-les-animaux.fr/api/v1',
  },
);

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER: {
      const {
        newRegisterEmail,
        newRegisterPseudo,
        newRegisterPassword,
      } = store.getState().connexionForm;
      axiosInstance
        .post('/utilisateurs', {
          email: newRegisterEmail,
          nickname: newRegisterPseudo,
          password: newRegisterPassword,
        }).then(
          (response) => {
            console.log(response);
            store.dispatch(saveUserRegister(response.data.register));
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default registerMiddleware;
