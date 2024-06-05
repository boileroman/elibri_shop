import React from 'react'
import CartProduct from '../../components/cartProduct/CartProduct'
import style from './Cart.module.css'
import { useSelector } from 'react-redux'
import { clearItems } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ORDER_FORM_ROUTE } from '../../utils/const'

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const {name} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(items));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [items]);



  return (
    <div className={style.cart}>
      <h1>Корзина</h1>
      <div className={style.items}>
        {items.map((obj) => (
          <CartProduct key={obj.productId} {...obj} />          
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
        <Link to={ORDER_FORM_ROUTE}>
          <button>
            Оформить заказ
          </button>
        </Link>


    </div>
  )
}

export default Cart
