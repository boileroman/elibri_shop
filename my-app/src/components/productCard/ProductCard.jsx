import React from 'react'
import { Link } from 'react-router-dom'
import style from './ProductCard.module.css'
import { addItem } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { CART_ROUTE } from '../../utils/const'

const ProductCard = ({image, name, price, productId, categoryId, stockQuantity}) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false)
  const onClickAdd = () => {
    dispatch(addItem({ image, name, price, productId, categoryId }));
    setIsAdded(true)
  };
  return (
    <div className={style.item}>
        <Link to={`/${categoryId}/${productId}`} className={style.about}>
          <img className={style.image} src={image} alt=''/>
          <div className={style.info}>
            <div className={style.name_quantity}>
              <p>{name}</p>
              <p>: {stockQuantity} шт.</p>              
            </div>
          </div>
        </Link>        
        <div className={style.rightpart}>
          <p className={style.price}>{price}₽</p> 
          <div className={style.addCart}>
          {isAdded ? (
            <Link to={CART_ROUTE}>
              <button>Перейти в корзину</button>
            </Link>
            ) : (
              <button onClick={onClickAdd}>Добавить в корзину</button>
            )}            
          </div>         
        </div>
    </div>
  )
}

export default ProductCard
