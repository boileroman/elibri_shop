import React from 'react'
import style from './Category.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const { category } = useParams();
    const [item, setItem] = React.useState();
  
    const navigate = useNavigate();
  
    React.useEffect(() => {
      async function fetchItems() {
        try {
          const res = await axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category/' + category);
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
        <img src={item?.link} className={style.link} />
        <p>{item?.name}</p>
        <p>{item?.price}</p>
      </div>
    );
}

export default Category
