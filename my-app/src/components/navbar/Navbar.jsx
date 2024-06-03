import React, { useState } from 'react'
import './Navbar.css'
import geo_icon from '../assets/Geo alt.svg'
import catalog_icon from '../assets/catalog.svg'
import language_icon from '../assets/Square.svg'
import person_icon from '../assets/Person fill.svg'
import cart_icon from '../assets/shopping-cart-solid.svg'
import orders_icon from '../assets/Briefcase.svg'
import { Link } from "react-router-dom"
import { CART_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/const'
import logo from '../assets/ELIBRI.svg'
import MenuCatalog from '../menuCatalog/MenuCatalog'
import { useDispatch, useSelector } from 'react-redux'
import { setIsActive } from '../../redux/menuSlice'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Navbar = () => {
    const dispatch = useDispatch()
    const {isActive} = useSelector((state)=>state.menu)
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
            <div className='nav-input'>
                <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Найти"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                </InputGroup>
            </div>

            <div className='nav-language-icon'>
                <img src={language_icon} alt=''/>
            </div>
            <div className='nav-orders-icon'>
                <Link to = {ORDER_ROUTE}><img src={orders_icon} alt=''/></Link>
            </div>
            <div className='nav-person-icon'>
                <Link to = {LOGIN_ROUTE}><img src={person_icon} alt=''/></Link>
            </div>
            <div className='nav-cart-icon'>
                <Link to = {CART_ROUTE}><img src={cart_icon} alt=''/></Link>
            </div>
        </div>    
  )
}

export default Navbar
