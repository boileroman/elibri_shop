import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import { CART_ROUTE, CHANGE_PASSWORD_ROUTE, ORDER_ROUTE } from '../../../utils/const';
import { setIsAuth } from './userSlice';
import hummingbird from '../../../components/assets/hummingbird 1.svg'

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userName, email } = useSelector(state => state.user);
  const {isAuth} = useSelector((state)=>state.user)



  const handleLogout = async () => {
    dispatch(setIsAuth(false))
    console.log("User logged out");
  };

  return (
    <div className="profile-container">
      <div className="logout-button" onClick={handleLogout}>Выход</div>
      <div className="profile-header">
        <div className="profile-pic"><img className='profile_pic_icon' src={hummingbird} alt=''/></div>
        <div className="profile-info">
          <h2 className='profile-stats-text'>{userName}</h2>
          <p>{email}</p>
        </div>
      </div>
      <Link to={CHANGE_PASSWORD_ROUTE}className="profile-section">Смена пароля</Link>
      <Link to={ORDER_ROUTE} className="profile-section">Мои заказы</Link>
      <Link to={CART_ROUTE} className="profile-section">Моя корзина</Link>
    </div>
  );
};

export default UserProfile;
