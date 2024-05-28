import React from 'react'
import style from './Category.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CategoryProducts from '../categoryProducts/CategoryProducts';

const Category = () => {
    const { id } = useParams();
    const [category, setCategory] = React.useState();
  
    const navigate = useNavigate();
  
    React.useEffect(() => {
      async function fetchCategories() {
        try {
          const res = await axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category/' + id);
         setCategory(res.data);
        } catch (err) {
          console.log(err);
          navigate('/');
        }
      }
      fetchCategories();
    }, []);
  
    console.log(category);
  
    if (!category) {
      return 'Загрузка...';
    }
  
    return (
      <div>
        <CategoryProducts />
      </div>
    );
}

export default Category