import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { setOldPassword, setNewPassword, setConfirmNewPassword } from './userSlice';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../../utils/const';

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const { oldPassword, newPassword, confirmNewPassword } = useSelector(state => state.user);

  const handleOldPasswordChange = (e) => {
    dispatch(setOldPassword(e.target.value));
  };

  const handleNewPasswordChange = (e) => {
    dispatch(setNewPassword(e.target.value));
  };

  const handleConfirmNewPasswordChange = (e) => {
    dispatch(setConfirmNewPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Новые пароли не совпадают");
      return;
    }
    
    // try {
    //   const response = await axios.post('/api/v1/auth/changePassword', {
    //     oldPassword,
    //     newPassword
    //   });
    //   console.log('Password change successful', response.data);
      
    // } catch (error) {
    //   console.error('Error changing password', error);
     
    // }
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="form-row">
          <h2>ELIBRI ID</h2>
        </div>
        <div className="form-row">
          <label htmlFor="oldPassword">Старый пароль:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="newPassword">Новый пароль:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="confirmNewPassword">Подтвердите новый пароль:</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={handleConfirmNewPasswordChange}
          />
        </div>
        <div className="form-row">
          <button type="submit">Сменить пароль</button>
        </div>
        <div>
          <Link to={LOGIN_ROUTE}>Вернуться к профилю</Link>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
