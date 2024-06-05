import React from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import style from './CategoryProducts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setItems } from '../../redux/itemSlice';
import ProductCard from '../../components/productCard/ProductCard';

const CategoryProducts = ({name}) => {
  const items = useSelector((state) => state.item.items);
  const { categoryId } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category/' + categoryId + '/items');
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
            <ProductCard key={item.productId} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts
