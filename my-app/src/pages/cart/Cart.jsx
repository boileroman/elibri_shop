import React from 'react'
import CartProduct from '../../components/cartProduct/CartProduct'
import style from './Cart.module.css'
import { useSelector } from 'react-redux'
import { clearItems } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(items));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    console.log('LS изменен');
  }, [items]);
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

    </div>
  )
}

export default Cart
