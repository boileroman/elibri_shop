import React, { useState } from 'react'
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
import { setIsSelected } from '../../redux/cartSlice'

const Cart = () => {
  const {isSelected} = useSelector((state)=>state.cart)  
  const [formValue, setFormValue] = useState({
    checkbox: isSelected,
  });
  const { items, totalPrice } = useSelector((state) => state.cart);
  const {name} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(items));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [items]);

  const biggestDeliveryDays = items.length > 0 
  ? items.reduce((max, item) => item.deliveryDays > max ? item.deliveryDays : max, items[0].deliveryDays) 
  : 0;

  const getDeliveryDaysText = (days) => {
    if (days === 1) {
      return 'день';
    } else if (days >= 2 && days <= 4) {
      return 'дня';
    } else if (days >= 5) {
      return 'дней';
    }
    return 'дней';
  };
  return (
    <div className={style.cart}>
      <p className={style.header}>Корзина</p>
      <div className={style.cart__content}>
        <div>
          <div className={style.choose}>
            <div className={style.choose_left_part}>
              <p className={style.choose__text}>Товаров: {totalCount}</p>
              <button className={style.clear} onClick={()=>dispatch(clearItems())}>
                Очистить
              </button>              
            </div>
          </div>
          <div className={style.items}>
            {items.map((obj) => (
              <CartProduct key={obj.productId} {...obj} />          
            ))}
          </div>         
        </div>      
        <div className={style.order_decoration}>
          <div>
            <p className={style.order_decoration__header}>Оформление</p>
            <p className={style.order_amount}>
              Товаров (<span>{totalCount}</span>{''}) <span className={style.total_price__value}>{totalPrice}₽</span>
            </p>
            <p className={style.order_delivery}>Заказ придет через {biggestDeliveryDays} {getDeliveryDaysText(biggestDeliveryDays)}</p>            
            <p className={style.total_price}>
              Всего <span className={style.total_price__value}>{totalPrice}₽</span>
            </p>        
          </div>
          <Link to={ORDER_FORM_ROUTE}>
            <button className={style.order_button}>
              Оформить заказ
            </button>
          </Link>        
        </div>        
      </div>

    </div>
  )
}

export default Cart
