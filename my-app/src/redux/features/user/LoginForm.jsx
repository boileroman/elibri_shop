import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setPassword, setIsAuth } from './userSlice';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import { RECOVERY_PASSWORD_ROUTE, REGISTRATION_ROUTE } from '../../../utils/const';
//import axios from 'axios';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { name, password } = useSelector(state => state.user);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, password });
  // try {
  //   const response = await axios.post('/api/v1/auth/login', {
  //     name,
  //     password,
  //   });
  //   console.log('login successful', response.data);
  //   dispatch(setIsAuth(true));
  // } catch (error) {
  //   console.error('Error login user', error);
  // }
    dispatch(setIsAuth(true));
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>ELIBRI ID</h2>
        <div>
          <label htmlFor="name">Логин</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Войти</button>
        <div className='replace-block'>
          <p>Нет аккаунта?</p>
          <Link to = {REGISTRATION_ROUTE}>Создать аккаунт</Link>          
        </div>
        <div>
          <p>Забыли пароль?</p>
          <Link to={RECOVERY_PASSWORD_ROUTE}>Восстановить</Link>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
