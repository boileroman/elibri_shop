import React, { useEffect, useState } from 'react'
import './Navbar.css'
import geo_icon from '../assets/Geo alt.svg'
import catalog_icon from '../assets/catalog.svg'
import language_icon from '../assets/Square.svg'
import person_icon from '../assets/Person fill.svg'
import cart_icon from '../assets/shopping-cart-solid.svg'
import orders_icon from '../assets/Briefcase.svg'
import glass from '../assets/search-solid.svg'
import { Link, useNavigate } from "react-router-dom"
import { CART_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE, SHOP_ROUTE } from '../../utils/const'
import logo from '../assets/ELIBRI.svg'
import MenuCatalog from '../menuCatalog/MenuCatalog'
import { useDispatch, useSelector } from 'react-redux'
import { setIsActive } from '../../redux/menuSlice'
import { setSubmit, setValue } from '../../redux/searchSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isActive} = useSelector((state)=>state.menu)
    const {isAuth} = useSelector((state) => state.user)
    const {value, submit} = useSelector((state)=>state.search)    
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(SEARCH_ROUTE)
        navigate(0)
    }
    const handleNothing = (e) =>{
        e.preventDefault();
    }
    useEffect(() => {
        localStorage.setItem('search', JSON.stringify(value));
      }, [value]);

    return (
        <div className='navbar'>
            <div className='nav-logo'>            
                <Link to = {SHOP_ROUTE}><img src={logo} alt=''/></Link>
            </div>
            <div className='nav-geo'>
                <div className='nav-geo-icon'>
                    <img src={geo_icon} alt=''/>    
                </div>
                <div className='nav-geo-text'>
                    <p>Челябинск</p>
                </div>
            </div>
            <div className='nav-catalog-icon'>
                <button className='nav-catalog-button' onClick={() => {dispatch(setIsActive(!isActive))}}><img src={catalog_icon} alt=''/></button>
            </div>
            <form className="input-search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    placeholder="Найти"
                    value={value}
                    onChange={(e) => dispatch(setValue(e.target.value))}
                />
                <img onClick={handleSubmit} className='input-search-glass' src={glass} alt=''/>
            </form>
            <div className='all-elements-links'>
                <div className='nav-orders-icon'>
                    <Link className='nav-link' to = {ORDER_ROUTE}>
                        <img src={orders_icon} alt=''/>
                        <p>Заказы</p>
                    </Link>
                </div>
                <div className='nav-person-icon'>
                    <Link className='nav-link' to = {LOGIN_ROUTE}>
                        <img src={person_icon} alt=''/>
                        <p>{isAuth ? 'Профиль' : 'Войти'}</p>
                    </Link>
                </div>
                <div className='nav-cart-icon'>
                    <Link className='nav-link' to = {CART_ROUTE}>
                        <img src={cart_icon} alt=''/>
                        <p>Корзина</p>
                    </Link>
                </div>                
            </div>

        </div>    
  )
}

export default Navbar
