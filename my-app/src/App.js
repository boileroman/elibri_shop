import './App.css';
import Navbar from './components/navbar/Navbar';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { CART_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from './utils/const';
import MenuCatalog from './components/menuCatalog/MenuCatalog';
import Footer from './components/footer/Footer';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  return (
    <div className='root'>
      <Navbar/>
      <MenuCatalog header={'Каталог'}/>
      <div className="content">
        <Routes>
          <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
          {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} exact/>
          )}
          {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} exact/>
          )}
        </Routes>        
      </div>  
    </div>
  );
}

export default App;
