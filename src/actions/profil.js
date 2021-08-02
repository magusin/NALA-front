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

export const UPDATE_PROFIL = 'UPDATE_PROFIL';
export const updateProfil = (
  id,
  nickname,
  lastname,
  firstname,
) => ({
  type: UPDATE_PROFIL,
  id,
  nickname,
  lastname,
  firstname,
});
