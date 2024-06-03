import React from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import style from './CategoryProducts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../redux/itemSlice';
import ProductCard from '../../components/productCard/ProductCard';

const CategoryProducts = ({name}) => {
  const items = useSelector((state) => state.item.items);
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category/' + id + '/items');
        dispatch(setItems(res.data));
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchCategories();
  }, []);


  return (
    <div className={style.all}>
      <p className={style.name}>{name}</p>
      <div className={style.items}>
        {items.map((item)=>(
            <ProductCard key={item.itemId} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts
