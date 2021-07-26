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

export const NEW_SUBSCRIPTION_EMAIL = 'NEW_SUBSCRIPTION_EMAIL';
export const newSubscriptionEmail = () => ({
  type: NEW_SUBSCRIPTION_EMAIL,
});

export const SET_NEW_SUBSCRIPTION_EMAIL = 'SET_NEW_SUBSCRIPTION_EMAIL';
export const setNewSubscriptionEmail = (newSubscriptionEmail) => ({
  type: SET_NEW_SUBSCRIPTION_EMAIL,
  newSubscriptionEmail,
});

export const NEW_SUBSCRIPTION_PSEUDO = 'NEW_SUBSCRIPTION_PSEUDO';
export const newSubscriptionPseudo = () => ({
  type: NEW_SUBSCRIPTION_PSEUDO,
})

export const SET_NEW_SUBSCRIPTION_PSEUDO = 'SET_NEW_SUBSCRIPTION_PSEUDO';
export const setNewSubscriptionPseudo = (newSubscriptionPseudo) => ({
  type: SET_NEW_SUBSCRIPTION_PSEUDO,
  newSubscriptionPseudo
});

export const NEW_SUBSCRIPTION_PASSWORD = 'NEW_SUBSCRIPTION_PASSWORD';
export const newSubscriptionPassword = () => ({
  type: NEW_SUBSCRIPTION_PASSWORD,
});

export const SET_NEW_SUBSCRIPTION_PASSWORD = 'SET_NEW_SUBSCRIPTION_PASSWORD';
export const setNewSubscriptionPassword = (newSubscriptionPassword) => ({
  type: SET_NEW_SUBSCRIPTION_PASSWORD,
  newSubscriptionPassword,
});





