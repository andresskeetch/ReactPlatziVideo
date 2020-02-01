import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Registrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input name='name' type='text' className='input' placeholder='Nombre' onChange={handleInput} />
          <input name='email' type='email' className='input' placeholder='Correo' onChange={handleInput} />
          <input name='password' type='password' className='input' placeholder='Contraseña' onChange={handleInput} />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <section className='register__container--login'>
          <Link to='/login'>
            Iniciar Sesion
          </Link>
        </section>
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);