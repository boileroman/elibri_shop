import React from 'react'
import style from './CartProduct.module.css';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, minusItem } from '../../redux/cartSlice';

const CartProduct = ({image, name, price, itemId, id, count}) => {
    const dispatch = useDispatch();
    const onClickAdd = () => {
      dispatch(addItem({ itemId }));
    };
  
    const onClickDelete = () => {
      dispatch(deleteItem({ itemId }));
    };
    const onClickMinus = () => {
      dispatch(minusItem({ itemId }));
    };
    return (
      <div>
        <div className={style.root}>
          <p>{name}</p>
          <button disabled={count == 1} onClick={onClickMinus}>
            -
          </button>
          <p>{count}</p>
          <button onClick={onClickAdd}>+</button>
          <p>{price} руб</p>
          <button onClick={onClickDelete}>Delete</button>
        </div>
      </div>
    );
}

export default CartProduct
