import React, { useState } from 'react'
import style from './CartProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, minusItem } from '../../redux/cartSlice';
import trash from '../assets/Trash fill.svg'
import trash1 from '../assets/Trash fill white.svg'
import { useEffect } from 'react';

const CartProduct = ({image, name, price, productId, quantity, stockQuantity, deliveryDays}) => {
    const {isSelected} = useSelector((state)=>state.cart)
    const [formValue, setFormValue] = useState({
      checkbox: isSelected,
    });
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


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValue);
    };

    const handleChangeCheckBox = (e) => {
      setFormValue({ ...formValue, checkbox: e.target.checked });
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
      <div>
        <div className={style.root}>
          
          <div className={style.cart_card}>              
              <img className = {style.image} src = {image} alt=''/>
              <div>
                <p className={style.item_name}>{name}</p>
                <p className={style.delivery}>Доставка через {deliveryDays} {getDeliveryDaysText(deliveryDays)}</p>                 
              </div>
              <p className={style.price}>{price*quantity}₽</p> 
              <div className={style.operation}>
                <div className={style.amount_item}>
                  <button className={style.amount_button} disabled={quantity == 1} onClick={onClickMinus}>
                    <span className={style.button_text_minus}>-</span>
                  </button>
                  <p className={style.quantity_item}>{quantity}</p>           
                  <button className={style.amount_button} disabled={quantity == stockQuantity} onClick={onClickAdd}>
                    <span className={style.button_text_plus}>+</span>
                  </button>                
                </div>
                <p className={style.stock_quantity}>Товаров осталось {stockQuantity}</p>
                <button className={style.trash} onClick={onClickDelete}><img src={trash} alt=''/></button>            
              </div>               

          </div>            
        </div>
      </div>
    );
}

export default CartProduct
