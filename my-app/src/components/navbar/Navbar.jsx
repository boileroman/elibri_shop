import React from 'react'
import './Navbar.css'
import geo_icon from '../assets/geo_icon.png'
import catalog_icon from '../assets/catalog-icon.png'
import language_icon from '../assets/language-icon.png'
import person_icon from '../assets/Person fill.png'
import cart_icon from '../assets/shopping-cart-solid.png'
import orders_icon from '../assets/Briefcase.png'
import { Link } from "react-router-dom"
import { CART_ROUTE, ORDER_ROUTE, SHOP_ROUTE } from '../../utils/const'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>            
            <Link to = {SHOP_ROUTE}><p>ELIBRI</p></Link>
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
            <img src={catalog_icon} alt=''/>
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
            <img src={person_icon} alt=''/>
        </div>
        <div className='nav-cart-icon'>
            <Link to = {CART_ROUTE}><img src={cart_icon} alt=''/></Link>
        </div>
    </div>
  )
}

export default Navbar