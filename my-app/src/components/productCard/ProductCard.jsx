import React from 'react'
import { Link } from 'react-router-dom'
import style from './ProductCard.module.css'
import { addItem } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const ProductCard = ({image, name, price, itemId, id}) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items.find((obj) => obj.itemId === itemId));
  const addedCount = item ? item.count : 0;
  const onClickAdd = () => {
    dispatch(addItem({ image, name, price, itemId, id }));
  };
  return (
    <div className={style.item}>
        <Link to={`/${id}/${itemId}`}>
          <img className={style.image} src={image} />
          <p>{name}</p>
          <p>{price} руб.</p>
        </Link>
        <div className={style.counter}>
          <p>{addedCount}</p>
          <button onClick={onClickAdd}>+</button>
        </div>
    </div>
  )
}

export default ProductCard
