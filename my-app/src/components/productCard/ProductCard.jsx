import React from 'react'
import { Link } from 'react-router-dom'
import style from './ProductCard.module.css'

const ProductCard = ({image, name, price, itemId, id}) => {
  return (
    <div className={style.item}>
        <Link to={`/${id}/${itemId}`}>
          <img className={style.image} src={image} />
          <p>{name}</p>
          <p>{price} руб.</p>
        </Link>
    </div>
  )
}

export default ProductCard
