/* eslint-disable no-shadow */
export const PROFIL_PSEUDO = 'PROFIL_PSEUDO';
export const profilPseudo = () => ({
  type: PROFIL_PSEUDO,
});

export const NEW_PROFIL_PSEUDO = 'NEW_PROFIL_PSEUDO';
export const newProfilPseudo = (profilPseudo) => ({
  type: NEW_PROFIL_PSEUDO,
  profilPseudo,
});

export const PROFIL_NAME = 'PROFIL_NAME';
export const profilName = () => ({
  type: PROFIL_PSEUDO,
});

export const NEW_PROFIL_NAME = 'NEW_PROFIL_NAME';
export const newProfilName = (profilName) => ({
  type: NEW_PROFIL_NAME,
  profilName,
});

export const PROFIL_FIRSTNAME = 'PROFIL_FIRSTNAME';
export const profilFirstname = () => ({
  type: PROFIL_FIRSTNAME,
});

export const NEW_PROFIL_FIRSTNAME = 'NEW_PROFIL_FIRSTNAME';
export const newProfilFirstname = (profilFirstname) => ({
  type: NEW_PROFIL_FIRSTNAME,
  profilFirstname,
});

export const PROFIL_EMAIL = 'PROFIL_EMAIL';
export const profilEmail = () => ({
  type: PROFIL_EMAIL,
});

export const NEW_PROFIL_EMAIL = 'NEW_PROFIL_EMAIL';
export const newProfilEmail = (profilEmail) => ({
  type: NEW_PROFIL_EMAIL,
  profilEmail,
});

export const PROFIL_PASSWORD = 'PROFIL_PASSWORD';
export const profilPassword = () => ({
  type: PROFIL_PASSWORD,
});

export const NEW_PROFIL_PASSWORD = 'NEW_PROFIL_PASSWORD';
export const newProfilPassword = (profilPassword) => ({
  type: NEW_PROFIL_PASSWORD,
  profilPassword,
});


export const UPDATE_PROFIL = 'UPDATE_PROFIL';
export const updateProfil = (
  id,
  nickname,
  lastname,
  firstname,
  email,
  password,
) => ({
  type: UPDATE_PROFIL,
  id,
  nickname,
  lastname,
  firstname,
  email,
  password,
});

export const UPDATED_PROFIL = 'UPDATED_PROFIL';

export const updatedProfil = (id,) => ({
  type: UPDATED_PROFIL,
  id,
});

