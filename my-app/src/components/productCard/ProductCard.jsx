import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image, category }) => {
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
        <Link to={`/${category}`} className={style.link}>
          <img className={style.image} src={image} alt=''/>
          <p>{category}</p>
        </Link>


        {/* <div className={style.counter}>
          <p>{addedCount}</p>
          <button onClick={onClickAdd}>+</button>
        </div> */}
        {/* <button
          onClick={() => {
            setIsShow(!isShow);
          }}>
          {isShow ? <p>Скрыть описание</p> : <p>Показать описание</p>}
        </button>
        {isShow && <p>Очень вкусный кекс</p>} */}
      </div>
    </div>
  );
};

export default ProductCard;
