import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='connexion'>
      <button className='btn'>Déconnexion</button>
    </Link>
  );
}
