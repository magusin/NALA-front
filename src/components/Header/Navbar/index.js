import React, { useState } from 'react';
import Button from 'src/containers/Header/Navbar/Button';
import { Link } from 'react-router-dom';
import './navbar.scss';


const Navbar = ({
  isLogged,
  changeConnexionFormToConnexion,
  changeConnexionFormToRegister,
}) => {
  //isOpenMenu : true or false
    //changeMenu
      // close mobile menu => false
      //click menu => true
  //isOpenDropdown : true or false
    // changeDropdown
      //pour passer isOpen en true ou false
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function goRegisterAndClose(){
    setClick(false),
    changeConnexionFormToRegister()    
  };

  function goConnexionAndClose() {
    setClick(false),
    changeConnexionFormToConnexion()
  }

  return (
    
      <nav className="navbar">
      {isLogged &&
        <>
          <Link to='/' className="navbar__logo" onClick={closeMobileMenu}>
          <i className="bi bi-person-circle"></i> Bonjour "pseudo"
          </Link>

          <div className="navbar__icon" onClick={handleClick}>
            <i className={click ? 'bi bi-x' : 'bi bi-list'}></i>
          </div>

          <ul className={click ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__item">
              <Link to='/profil' className="navbar__links" onClick={closeMobileMenu}>
                Profil
              </Link>
            </li>

            <li className="navbar__item">
              <Link
                to='/notifications'
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Notification
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to='/tags'
                className="navbar__links"
                onClick={closeMobileMenu}
              >
                Mes "J'aime"
              </Link>
            </li>
            <li>
              <Link
                to='/deconnexion'
                className="navbar__links-mobile"
                onClick={closeMobileMenu}
              >
                Déconnexion
              </Link>
            </li>
          </ul>
        </>
      }
      {!isLogged &&
        <>
          <div className="navbar__icon" onClick={handleClick}>
              <i className={click ? 'bi bi-x' : 'bi bi-list'}></i>
          </div>
          <ul className={click ? "navbar__menu active" : "navbar__menu"}>
            <li>
                <Link
                  to='/connexion'
                  className="navbar__links-mobile"
                  onClick={() => goRegisterAndClose() }
                >
                  S'enregistrer
                </Link>
              </li>
              <li>
                <Link
                  to='/connexion'
                  className="navbar__links-mobile"
                  onClick={() => goConnexionAndClose() }
                >
                  Se connecter
                </Link>
              </li>
          </ul>
        </>
      }      
        <Button isLogged={isLogged}/>
      </nav>
    
  );
}

export default Navbar;
