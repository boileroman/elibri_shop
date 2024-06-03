import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import axios from 'axios';
import { setName, setEmail, setPassword, setConfirmPassword } from './userSlice';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/const';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword } = useSelector(state => state.user);

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    dispatch(setConfirmPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    
    try {
      const response = await axios.post('http://25.49.57.113:5000/api/v1/auth/registration', {
        userName: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Registration successful', response.data);
  
    } catch (error) {
      console.error('Ошибка при регистрации пользователя', error.response && error.response.data ? error.response.data : error.message);
    }
  };




  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="form-row">
          <h2>ELIBRI ID</h2>
        </div>
        <div className="form-row">
          <label htmlFor="name">Логин:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            autocomplete="username" 
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            autocomplete="email" 
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autocomplete="new-password" 
          />
        </div>
        <div className="form-row">
          <label htmlFor="confirmPassword">Подтвердите пароль:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            autocomplete="new-password" 
          />
        </div>
        <div className="form-row">
          <button type="submit">Зарегистрироваться</button>
        </div>
        <div>
          <p>Уже есть аккаунт?</p>
          <Link to={LOGIN_ROUTE}>Войти</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;