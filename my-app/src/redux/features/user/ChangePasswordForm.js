import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setOldPassword, setNewPassword, setConfirmNewPassword } from './userSlice';
import './RegistrationForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../../utils/const';
import Cookies from 'js-cookie';
import Footer from '../../../components/footer/Footer';

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const { oldPassword, newPassword, confirmNewPassword } = useSelector(state => state.user);
  const Cookie = Cookies.get('jwt-cookies');
  const navigate = useNavigate();
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

    
    try {
      await axios.post('http://25.49.57.113:4000/api/v1/profile/changePassword', {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmNewPassword,
      }, { headers: { 'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookie}`,
      } },);
      navigate(LOGIN_ROUTE)
      
    } catch (error) {
      alert('Ошибка с изменением', error);
     
    }
    if (newPassword !== confirmNewPassword) {
      alert("Новые пароли не совпадают");
      return;
    }
  };


  return (
    <div>
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
      <Footer/>          
    </div>

  );
};

export default ChangePasswordForm;
