import './App.css';
import Navbar from './components/navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { authRoutes, publicRoutes } from './routes';
import { SHOP_ROUTE } from './utils/const';

function App() {
  const isAuth = true
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Navigate replace to="/" />} />
        {isAuth && authRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component />} exact/>
        )}
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path={path} element={<Component />} exact/>
        )}
      </Routes>        
    </div>
  );
}

export default App;
