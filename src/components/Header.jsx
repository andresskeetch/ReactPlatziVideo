import React from 'react';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' alt='Logo' src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesion</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
