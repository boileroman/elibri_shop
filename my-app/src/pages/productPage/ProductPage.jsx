import React from 'react'
import style from './ProductPage.module.css'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Description from '../../components/description/Description'

const ProductPage = () => {
  const { categoryId, productId } = useParams();
  const [item, setItem] = useState();
  const [descriptionActive, setDescriptionActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category/' + categoryId + '/items/' + productId);
        setItem(res.data);
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchItems();
  }, []);

  console.log(item);

  if (!item) {
    return 'Загрузка...';
  }

  return (
    <div>
      <div className={style.description}>
        <Description active={descriptionActive} setActive={setDescriptionActive} header={'Характеристики и описание'}/>        
      </div>
      <div className={style.productP}>
        <img src={item?.image} className={style.image} alt=''/>
        <p>{item?.name}</p>
        <p>{item?.price}</p>  
        <button className={style.button} onClick={() => {setDescriptionActive(!descriptionActive)}}>Описание {">"}</button>              
      </div>      
    </div>
  )
}

export default ProductPage
