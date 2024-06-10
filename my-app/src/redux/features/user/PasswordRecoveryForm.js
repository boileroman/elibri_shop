import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setEmail } from './userSlice';
import './RegistrationForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/const';

const PasswordRecoveryForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user);

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://25.49.57.113:4000/api/v1/auth/resetPassword', { email: email}, { headers: { 'Content-Type': 'application/json',
      } },);
      alert('Пароль успешно восстановлен', response.data);
      navigate(LOGIN_ROUTE)
    } catch (error) {
      alert('Ошибка с восстановлением пароля. Пользователя с такой электронной почтой не найдено', error);

    }
  };


  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>ELIBRI ID</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
         </div>
        <div className="form-row">
        <button type="submit">Восстановить пароль</button>
        </div>

        <div>

        <Link to={LOGIN_ROUTE}>Вернуться</Link>  
        </div>    
      </form>

    </div>
  );
};

export default PasswordRecoveryForm;
