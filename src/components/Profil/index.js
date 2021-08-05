import React, { useEffect } from 'react';
import './profil.scss';
import AddPost from 'src/containers/Profil/AddPost';
import List from 'src/containers/Profil/List';

const Profil = ({
  profilPseudo,
  newProfilPseudo,
  profilName,
  newProfilName,
  profilFirstname,
  newProfilFirstname,
  manageSubmit,
  nickname,
  lastname,
  firstname,
  email,
  profilEmail,
  newProfilEmail,
  profilPassword,
  newProfilPassword,
  categories,
  categoriesLoaded,
  fetchCategories,
  notification,
  postNotification,
}) => {

  if(!categoriesLoaded){
    useEffect(
      fetchCategories,
      []
    )
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    manageSubmit();
  };
  return (
    <div className="profil">
      <h1 className="profil__title">Profil</h1>
      <div className="profil__section">
      <div className={notification != null ? "profil-notification active" : "profil-notification"}>
    {notification == 200 &&
      <span className="info-edit"><i className="bi bi-check-circle-fill"></i> Le profil à bien été modifié, les changements seront effectifs à la prochaine connexion</span>
    }
    {notification == "Error" &&
      <span className="info-error"><i className="bi bi-x-circle-fill"></i> Une erreur est survenue</span>
    }
    </div>
        <div className="profil__section-text">
          <p>Pseudo : {nickname}</p>
          <p>Nom : {lastname}</p>
          <p>Prénom : {firstname}</p>
          <p>Email : {email}</p>
        </div>
        <div className="profil__section-update">
          <form
            className="profil__section-form"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                className="profil__section-input"
                type="text"
                placeholder=" Pseudo*"
                value={profilPseudo}
                onChange={(evt) => newProfilPseudo(evt.target.value)}
                required/>
            </div>
            <div>
              <input
                className="profil__section-input"
                type="email"
                placeholder=" Email*"
                value={profilEmail}
                onChange={(evt) => newProfilEmail(evt.target.value)}
                required/>
            </div>
            <div>
              <input
                className="profil__section-input"
                type="password"
                placeholder=" Mot de passe*"
                value={profilPassword}
                onChange={(evt) => newProfilPassword(evt.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="profil__section-input"
                type="text"
                placeholder="Nom"
                value={profilName}
                onChange={(evt) => newProfilName(evt.target.value)}
              />
            </div>
            <div>
              <input
                className="profil__section-input"
                type="text"
                placeholder="Prénom"
                value={profilFirstname}
                onChange={(evt) => newProfilFirstname(evt.target.value)}
              />
            </div>
            <button
              className="profil__section-button"
              type="submit"
            >
              Modifier
            </button>
          </form>
        </div>
      </div>
      <h2 className="profil__title">Ajouter une nouvelle image</h2>
      <div className={postNotification != null ? "profil-notification active" : "profil-notification"}>
      {(postNotification == "postAdd201") &&
        (
          <span className="info-edit">
            <i className="bi bi-check-circle-fill"></i>
            L'ajout d'image a bien été effectué
          </span>
        )
      }
      {postNotification == "postAddError" &&
        (
          <span className="info-error">
          <i className="bi bi-x-circle-fill"></i> 
          Une erreur est survenue
        </span>
        )
      }
      </div>
      <AddPost categories={categories}/>
      <h2 className="profil__title">Mes postes</h2>
      <List categories={categories}/>
    </div>
);
  }
export default Profil;
