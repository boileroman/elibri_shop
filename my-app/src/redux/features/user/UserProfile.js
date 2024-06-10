import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserProfile.css';
import { Link } from 'react-router-dom';
import { CART_ROUTE, CHANGE_PASSWORD_ROUTE, ORDER_ROUTE } from '../../../utils/const';
import { setEmail, setIsAuth, setUserName } from './userSlice';
import hummingbird from '../../../components/assets/hummingbird 1.svg'
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Footer from '../../../components/footer/Footer';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userName, email } = useSelector(state => state.user);
  const {isAuth} = useSelector((state)=>state.user)

  useEffect(() => {
    const token = Cookies.get('jwt-cookies');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userName = decodedToken.sub;
      const email = decodedToken.email; 
      console.log(email)
      dispatch(setEmail(email)); 
      dispatch(setUserName(userName)); 
      dispatch(setIsAuth(true)); 
      localStorage.setItem('isAuth', JSON.stringify(isAuth)); 
    }
  }, [dispatch]);



  const handleLogout = async () => {
    dispatch(setIsAuth(false));
    Cookies.remove('jwt-cookies');
    console.log("User logged out");
  };

  return (
    <div>
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
      <Footer/>     
    </div>

  );
};

export default UserProfile;
