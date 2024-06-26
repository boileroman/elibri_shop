import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router';
import { setOrders } from '../../redux/orderSlice';
import OrderCard from '../orderCard/OrderCard';
import style from './Orders.module.css'
import Cookies from 'js-cookie';
import Footer from '../../components/footer/Footer';

const Orders = () => {
  const items = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const Cookie = Cookies.get('jwt-cookies');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await axios.get('http://25.49.57.113:4000/api/v1/profile/userOrders',
          { headers: {
          'Authorization': `Bearer ${Cookie}`,
         } },);
        dispatch(setOrders(res.data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchOrders();
  }, []);


  return (
    <div>
      <div className={style.orders}>
        <p className={style.header}>Заказы: {items.length}</p>
        <div className={style.items}>
          {items.map((order)=>(
            <OrderCard key={order.orderId} {...order}/>
          ))}
        </div>

      </div> 
      <Footer/>     
    </div>

  )
}

export default Orders
