import './App.css';
import Navbar from './components/navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/cart/Cart';
import { authRoutes, publicRoutes } from './routes';
import { LOGIN_ROUTE, SHOP_ROUTE } from './utils/const';
import MenuCatalog from './components/menuCatalog/MenuCatalog';
import { useState } from 'react';
import Footer from './components/footer/Footer';
import LoginForm from './redux/features/user/LoginForm';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const {isActive} = useSelector(state => state.menu);
  return (
    <div>
      <Navbar/>
      <MenuCatalog header={'Каталог'}/> 
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        {isAuth && authRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component />} exact/>
        )}
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component />} exact/>
        )}
      </Routes>  
      {/* <Footer/> */}
    </div>
  );
}

export default App;
