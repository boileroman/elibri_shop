import React from 'react'
import './Navbar.css'
import geo_icon from '../assets/geo_icon.png'
import catalog_icon from '../assets/catalog-icon.png'
import language_icon from '../assets/language-icon.png'
import person_icon from '../assets/Person fill.png'
import cart_icon from '../assets/shopping-cart-solid.png'
import orders_icon from '../assets/Briefcase.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>ELIBRI</p>
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
            <input className='text-field-input' type='text' placeholder='Name'></input>
        </div>

        <div className='nav-language-icon'>
            <img src={language_icon} alt=''/>
        </div>
        <div className='nav-orders-icon'>
            <img src={orders_icon} alt=''/>
        </div>
        <div className='nav-person-icon'>
            <img src={person_icon} alt=''/>
        </div>
        <div className='nav-cart-icon'>
            <img src={cart_icon} alt=''/>
        </div>
    </div>
  )
}

export default Navbar
