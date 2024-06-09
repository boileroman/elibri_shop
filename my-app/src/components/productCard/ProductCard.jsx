import React from 'react'
import { Link } from 'react-router-dom'
import style from './ProductCard.module.css'
import { addItem } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { CART_ROUTE } from '../../utils/const'

const ProductCard = ({image, name, price, productId, categoryId, stockQuantity, warranty, color, deliveryDays}) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false)
  const onClickAdd = () => {
    dispatch(addItem({ image, name, price, productId, categoryId, stockQuantity, deliveryDays }));
    setIsAdded(true)
  };
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
    <div className={style.item}>
        <Link to={`/${categoryId}/${productId}`} className={style.about}>
          <img className={style.image} src={image} alt=''/>
          <div className={style.info}>
            <div className={style.name}>
              <p className={style.name_exact}>{name}</p>           
              <p>Цвет: {color}</p>
              <p>Гарантия: {warranty}</p>
            </div>            
          </div>
        </Link>        
        <div className={style.rightpart}>
          <p className={style.price}>{price}₽</p> 
          <p className={style.quantity}>Осталось {stockQuantity} шт.</p>
          <p className={style.addCart__delivery}>Доставка через {deliveryDays} {getDeliveryDaysText(deliveryDays)}</p>          
          <div className={style.addCart}>

            {isAdded ? (
            <Link to={CART_ROUTE}>
                <button className={`${style.button} ${style.navigate}`}>Перейти в корзину</button>
              </Link>
              ) : (
                <button className={style.button} onClick={onClickAdd}>Добавить в корзину</button>
            )}            
          </div>         
        </div>
    </div>
  )
}

export default ProductCard
