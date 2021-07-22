import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Dropdown from 'src/containers/Navbar/Dropdown';

const Navbar = ({
  handleDisplayDropdown,
  handleNotDisplayDropdown,
  dropdownSelect,
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

  const onMouseEnter = () => {
    if (window.innerWidth > 767) {
       {handleDisplayDropdown()}
    }else{
      {handleNotDisplayDropdown()}
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 767) {
      {handleNotDisplayDropdown()}
    } else {
      {handleNotDisplayDropdown()}
    }
  };

  return (
    <>
      <nav className='navbar'>
        
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <i className="fas fa-user-circle fa"> Bonjour "pseudo"</i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/profil' className='nav-links' onClick={closeMobileMenu}>
              Profil
            </Link>
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}    
          >
            <Link
              to='/notifications'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Notification
            </Link>
            {dropdownSelect && <Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link
              to='/tags'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Mes "J'aime"
            </Link>
          </li>
          <li>
            <Link
              to='/connexion'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Déconnexion
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

Navbar.propTypes = {
  handleDisplayDropdown: PropTypes.func.isRequired,
  handleNotDisplayDropdown: PropTypes.func.isRequired,
  dropdownSelect: PropTypes.bool.isRequired,
}

export default Navbar;
