export const SELECT_INSCRIPTION_FORM = 'SELECT_INSCRIPTION_FORM';
export const selectInscriptionForm = () => ({
  type: SELECT_INSCRIPTION_FORM,  
});

export const SELECT_CONNEXION_FORM = 'SELECT_CONNEXION_FORM';
export const selectConnexionForm = () => ({
  type: SELECT_CONNEXION_FORM,  
});

// CONTROLLED INPUT

export const NEW_CONNEXION_EMAIL = 'NEW_CONNEXION_EMAIL';
export const newConnexionEmail = () => ({
  type: NEW_CONNEXION_EMAIL,
});

export const SET_NEW_CONNEXION_EMAIL = 'SET_NEW_CONNEXION_EMAIL';
export const setNewConnexionEmail = (newConnexionEmail) => ({
  type: SET_NEW_CONNEXION_EMAIL,
  newConnexionEmail
});

export const NEW_CONNEXION_PASSWORD = 'NEW_CONNEXION_PASSWORD';
export const newConnexionPassword = () => ({
  type: NEW_CONNEXION_PASSWORD,  
});

export const SET_NEW_CONNEXION_PASSWORD = 'SET_NEW_CONNEXION_PASSWORD';
export const setNewConnexionPassword = (newConnexionPassword) => ({
  type: SET_NEW_CONNEXION_PASSWORD,
  newConnexionPassword
});

export const NEW_REGISTER_EMAIL = 'NEW_REGISTER_EMAIL';
export const newRegisterEmail = () => ({
  type: NEW_REGISTER_EMAIL,
});

export const SET_NEW_REGISTER_EMAIL = 'SET_NEW_REGISTER_EMAIL';
export const setNewRegisterEmail = (newRegisterEmail) => ({
  type: SET_NEW_REGISTER_EMAIL,
  newRegisterEmail,
});

export const NEW_REGISTER_PSEUDO = 'NEW_REGISTER_PSEUDO';
export const newRegisterPseudo = () => ({
  type: NEW_REGISTER_PSEUDO,
})

export const SET_NEW_REGISTER_PSEUDO = 'SET_NEW_REGISTER_PSEUDO';
export const setNewRegisterPseudo = (newRegisterPseudo) => ({
  type: SET_NEW_REGISTER_PSEUDO,
  newRegisterPseudo
});

export const NEW_REGISTER_PASSWORD = 'NEW_REGISTER_PASSWORD';
export const newRegisterPassword = () => ({
  type: NEW_REGISTER_PASSWORD,
});

export const SET_NEW_REGISTER_PASSWORD = 'SET_NEW_REGISTER_PASSWORD';
export const setNewRegisterPassword = (newRegisterPassword) => ({
  type: SET_NEW_REGISTER_PASSWORD,
  newRegisterPassword,
});

export const CHANGE_CONNEXION_FORM_FOR_REGISTER = 'CHANGE_CONNEXION_FORM_FOR_REGISTER';

export const changeConnexionFormForRegister = () => ({
  type: CHANGE_CONNEXION_FORM_FOR_REGISTER, 
});

export const CHANGE_CONNEXION_FORM_FOR_CONNEXION = 'CHANGE_CONNEXION_FORM_FOR_CONNEXION';

export const changeConnexionFormForConnexion = () => ({
  type: CHANGE_CONNEXION_FORM_FOR_CONNEXION,
  
});
export const SAVE_TOKEN = 'SAVE_TOKEN';

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token,
});
;






