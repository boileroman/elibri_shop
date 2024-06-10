import React, { useEffect, useState } from 'react'
import style from './RelatedProductCard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { addItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { CART_ROUTE } from '../../utils/const';
import cart from '../assets/shopping-cart-solid.svg'
const RelatedProductCard = ({image, name, price, deliveryDays, stockQuantity, categoryId, productId}) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false)
  const [deliveryDate, setDeliveryDate] = useState('');
  const onClickAdd = () => {
    dispatch(addItem({ image, name, price, productId, categoryId, stockQuantity, deliveryDays }));
    setIsAdded(true)
  };
  const navigate = useNavigate()
  const handleNavigate = (categoryId, productId) =>{
    navigate(`/${categoryId}/${productId}`);
    navigate(0);
  }

  useEffect(() => {
    const calculateDeliveryDate = () => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + deliveryDays);
      const options = { day: 'numeric', month: 'long' };
      return currentDate.toLocaleDateString('ru-RU', options);
    };
    setDeliveryDate(calculateDeliveryDate());
  }, [deliveryDays]);
  return (
    <div className={style.related_product}>
      <img onClick={()=>handleNavigate(categoryId, productId)} className={style.image} src={image} alt=''/>           
      <div className={style.info}>
        <div className={style.name_price}>
            <p className={style.price}>{price}₽</p>      
            <p onClick={()=>handleNavigate(categoryId, productId)} className={style.name}>{name}</p>           
        </div>
        <div className={style.decoration}>
            <p className={style.quantity}>Осталось {stockQuantity} шт.</p>
            {isAdded ? (
            <Link to={CART_ROUTE}>
                <button className={`${style.button} ${style.navigate}`}>Перейти в корзину</button>
              </Link>
              ) : (
                <button className={style.button} onClick={onClickAdd}>{deliveryDate}<img className={style.cart__icon} src={cart} alt=''/></button>
            )} 
        </div>

      </div>

    </div>
  )
}

export default RelatedProductCard
