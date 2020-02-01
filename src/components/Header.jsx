import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' alt='Logo' src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='User' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ? (
              <>
                <li>
                  <Link to='/'>
                    {user.name}
                  </Link>
                </li>
                <li>
                  <Link to='#logout' onClick={handleLogout}>
                  Cerrar Sesion
                  </Link>
                </li>
              </>
            ) : null
          }
        </ul>
      </div>
    </header>
  );
};

const mapDispatchToProps = {
  logoutRequest,
};
const mapToStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapToStateToProps, mapDispatchToProps)(Header);
