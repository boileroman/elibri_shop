import React from 'react'
import style from './CartProduct.module.css';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, minusItem } from '../../redux/cartSlice';

const CartProduct = ({image, name, price, productId, quantity}) => {
    const dispatch = useDispatch();
    const onClickAdd = () => {
      dispatch(addItem({ productId }));
    };
  
    const onClickDelete = () => {
      dispatch(deleteItem({ productId }));
    };
    const onClickMinus = () => {
      dispatch(minusItem({ productId }));
    };
    return (
      <div>
        <div className={style.root}>
          <img className = {style.image} src = {image} alt=''/>
          <p>{name}</p>
          <button disabled={quantity == 1} onClick={onClickMinus}>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={onClickAdd}>+</button>
          <p>{price} руб</p>
          <button onClick={onClickDelete}>Delete</button>
        </div>
      </div>
    );
}

export default CartProduct
