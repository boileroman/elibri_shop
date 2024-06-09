import React from 'react'
import style from './OrderCard.module.css'
const OrderCard = ({cartItems, formattedOrderId, status, totalPrice, deliveryDateFormatted, orderDateFormatted}) => {
  return (
    <div className={style.items}>
      <p className={style.delivery}>{orderDateFormatted}</p>
      <p className={style.order__id}>{formattedOrderId}</p>
      <div className={style.orders}>
        {cartItems.map((item, productId) => (
          <div key={productId}>
            <img className={style.image} src={item.image} alt='' />
          </div>
        ))}        
      </div>
      <div className={style.options}>
        <p className={style.status__text}>Статус: {status}</p>
        <p className={style.payed__text}>Оплачено: {totalPrice}₽</p>
        <p className={style.delivery__text}>Доставка: {deliveryDateFormatted}</p>
      </div>

    </div>
  )
}

export default OrderCard
