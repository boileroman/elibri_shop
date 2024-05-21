import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './CategoryCard.module.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ id, name, price, image, itemId }) => {
  // const [isShow, setIsShow] = useState(false);
  // const dispatch = useDispatch();

  // const item = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  // const addedCount = item ? item.count : 0;

  // const onClickAdd = () => {
  //   dispatch(addItem({ id, name, price, image }));
  // };

  return (
    <div>
      <div className={style.item}>
        <Link to={`/${id}`} className={style.link}>
          <p>{id}</p>
          <img className={style.image} src={image} alt=''/>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
