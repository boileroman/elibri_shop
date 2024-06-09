import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setEmail, setPassword, setConfirmPassword } from './userSlice';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/const';
import axios from 'axios';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { userName, email, password, confirmPassword } = useSelector(state => state.user);

  const handleNameChange = (e) => {
    dispatch(setUserName(e.target.value));
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

    try {
      const response = await axios.post('http://25.49.57.113:4000/api/v1/auth/registration', {
        userName: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },            
      { headers: { 'Content-Type': 'application/json',
       } },);
      console.log('Registration successful', response.data);
      localStorage.setItem('userEmail', JSON.stringify(email));

    } catch (error) {
      console.error('Ошибка с регистрацией', error);
    }
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="form-row">
          <h2>
            ELIBRI ID
          </h2>
        </div>
        <div className="form-row">
          <label htmlFor="userName">Логин:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleNameChange}
            autoComplete="username"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            autoComplete="email"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
        </div>
        <div className="form-row">
          <label htmlFor="confirmPassword">Подтвердите пароль:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            autoComplete="new-password"
          />
        </div>
        <div className="form-row">
          <button type="submit">Зарегистрироваться</button>
        </div>
        <div>
          <Link to={LOGIN_ROUTE}>Уже есть аккаунт? Войти</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
