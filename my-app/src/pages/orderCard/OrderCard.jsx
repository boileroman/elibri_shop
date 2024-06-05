import React from 'react'
import style from './OrderCard.module.css'
const OrderCard = ({items}) => {
  return (
    <div className={style.items}>
      {items.map((item, productId) => (
        <div key={productId}>
          <img src={item.image} alt='' />
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  )
}

export default OrderCard
