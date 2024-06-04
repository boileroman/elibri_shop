import React from 'react'
import CartProduct from '../../components/cartProduct/CartProduct'
import style from './Cart.module.css'
import { useSelector } from 'react-redux'
import { clearItems } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const {name} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(items));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [items]);


  const AddOrder = (items) => {
    axios
      .post(
        'https://665f4c161e9017dc16f3a89c.mockapi.io/order',
        {
          items: items.map(item => ({
            itemId: item.itemId,
            count: item.count,  
          })),

        },
        { headers: { 'Content-Type': 'application/json' } },
      )
      .then(response => {
        console.log('Order placed successfully:', response);
        dispatch(clearItems());
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });
  };
  return (
    <div className={style.cart}>
      <h1>Корзина</h1>
      <div className={style.items}>
        {items.map((obj) => (
          <CartProduct key={obj.itemId} {...obj} />          
        ))}
      </div>        
        <button
          onClick={() => {
            dispatch(clearItems());
          }}>
          Clear
        </button>
        <div>
          <p>
            Товаров (<span>{totalCount}</span>{''}) <span>{totalPrice}</span> Р
          </p>
          <p>
            Всего <span>{totalPrice}</span> Р
          </p>        
        </div>
        <div>
          <button onClick={()=>AddOrder(items)}>
            Оформить заказ
          </button>
        </div>


    </div>
  )
}

export default Cart
