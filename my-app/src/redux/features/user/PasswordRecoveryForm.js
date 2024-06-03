import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { setEmail } from './userSlice';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../../utils/const';

const PasswordRecoveryForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.user);

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // try {
    //   const response = await axios.post('/api/v1/auth/resetPassword', { email });
    //   console.log('Password recovery request successful', response.data);
      
    // } catch (error) {
    //   console.error('Error requesting password recovery', error);

    // }
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
        <button type="submit">Восстановить пароль</button>
        <Link to={LOGIN_ROUTE}>Вернуться</Link>      
      </form>

    </div>
  );
};

export default PasswordRecoveryForm;
