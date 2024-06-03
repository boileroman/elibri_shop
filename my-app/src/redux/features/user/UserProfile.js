import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import { CHANGE_PASSWORD_ROUTE, ORDER_ROUTE } from '../../../utils/const';
import { setIsAuth } from './userSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state.user);

  const handleLogout = async () => {
    dispatch(setIsAuth(false))
    console.log("User logged out");
  };

  return (
    <div className="profile-container">
      <div className="logout-button" onClick={handleLogout}>Выход</div>
      <div className="profile-header">
        <div className="profile-pic"></div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <Link to={CHANGE_PASSWORD_ROUTE}className="profile-section">Смена пароля</Link>
      <Link to={ORDER_ROUTE} className="profile-section">Заказы</Link>
      <div className="profile-section">Адреса</div>
      <div className="profile-section">Способы оплаты</div>
      <div className="profile-section">Отзывы</div>
    </div>
  );
};

export default UserProfile;
