import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 767) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 767) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <i class="fas fa-user-circle fa"> Bonjour "pseudo"</i>
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
            {dropdown && <Dropdown />}
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

export default Navbar;
