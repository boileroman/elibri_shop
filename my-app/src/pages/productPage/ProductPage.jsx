import React from 'react'
import Product from '../../components/product/Product'
import style from './ProductPage.module.css'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'

const ProductPage = () => {
  const { id, itemId } = useParams();
  const [item, setItem] = React.useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItems() {
      try {
        const res = await axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category/' + id + '/items/' + itemId);
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
    <div className={style.productP}>
      <img src={item?.image} className={style.image} />
      <p>{item?.name}</p>
      <p>{item?.price}</p>
    </div>
  )
}

export default ProductPage
