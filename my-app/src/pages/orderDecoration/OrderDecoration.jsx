import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import style from './OrderDecoration.module.css'
import { clearItems } from '../../redux/cartSlice'
import Cookies from 'js-cookie';

const OrderDecoration = () => {
    const { items, totalPrice } = useSelector((state) => state.cart);
    const { name } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const Cookie = Cookies.get('jwt-cookies');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');   
    const [cardNumber, setCardNumber] = useState(''); 


    useEffect(() => {
      localStorage.setItem('cartProducts', JSON.stringify(items));
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    }, [items, totalPrice]);

    const AddOrder = (items) => {
        axios
          .post(
            'http://25.49.57.113:4000/api/v1/order/create',
            {
              cartItems: items.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                image: item.image,  
              })),
              firstName,
              lastName,
              address,
              phoneNumber,
              cardNumber
            },
            { headers: { 'Content-Type': 'application/json',
              'Authorization': `Bearer ${Cookie}`,
             } },
          )
          .then(response => {
            console.log('Order placed successfully:', response);
            dispatch(clearItems());
          })
          .catch(error => {
            console.error('Error placing order:', error);
          });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      AddOrder(items, firstName, lastName, address, phoneNumber, cardNumber);
    };
  return (
    <div className={style.form_container}>
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="form-row">
            <p className={style.form__header}>
              Оформление
            </p>
          </div>
          <div className={style.form_row}>
            <label>
              Имя:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Фамилия:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Адрес:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Номер телефона:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Номер карты:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Оформить заказ</button>
        </form>
    </div>
  )
}

export default OrderDecoration
