import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setPassword, setIsAuth } from './userSlice';

import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import { RECOVERY_PASSWORD_ROUTE, REGISTRATION_ROUTE } from '../../../utils/const';
// import axios from 'axios';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { userName, password } = useSelector(state => state.user);


  const handleUserNameChange = (e) => {
    dispatch(setUserName(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ userName, password });
    
    // try {
    //   const response = await axios.post('/api/v1/auth/login', {
    //     userName,
    //     password,
    //   });
    //   console.log('Login successful', response.data);
    //   dispatch(setIsAuth(true));
    // } catch (error) {
    //   console.error('ошибка со входом', error);
    // }

    dispatch(setIsAuth(true));
  };
  return (
    <div className="form-container">       
      <form className="form-box" onSubmit={handleSubmit}>
       <div className="form-row">
        <h2>ELIBRI ID</h2>
        </div>
        <div className="form-row">
          <label htmlFor="userName">Логин</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
         <div className="form-row">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Войти</button>
        <div className="replace-block">
          <Link to={REGISTRATION_ROUTE}>Нет аккаунта? Создать аккаунт</Link>
        </div>
        <div>
          <Link to={RECOVERY_PASSWORD_ROUTE}>Забыли пароль? Восстановить</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

