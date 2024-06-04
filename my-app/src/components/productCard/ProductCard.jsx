import React from 'react'
import { Link } from 'react-router-dom'
import style from './ProductCard.module.css'
import { addItem } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ProductCard = ({image, name, price, itemId, id, stockQuantity}) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items.find((obj) => obj.itemId === itemId));
  const addedCount = item ? item.count : 0;
  const onClickAdd = () => {
    dispatch(addItem({ image, name, price, itemId, id }));
  };
  return (
    <div className={style.item}>
        <Link to={`/${id}/${itemId}`} className={style.about}>
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
            <p>{addedCount}</p>
            <button onClick={onClickAdd}>+</button>            
          </div>         
        </div>
    </div>
  )
}

export default ProductCard
