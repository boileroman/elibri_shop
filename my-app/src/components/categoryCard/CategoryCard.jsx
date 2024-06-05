import React from "react";
import style from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ categoryId, name, image }) => {
  return (
    <div className={style.all}>
      <div className={style.item}>
        <Link to={`/${categoryId}`} className={style.link}>
          <p className={style.text}>{name}</p>
          <img className={style.image} src={image} alt=''/>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
