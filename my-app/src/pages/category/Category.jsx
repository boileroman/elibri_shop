import React from 'react'
import style from './Category.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CategoryProducts from '../categoryProducts/CategoryProducts';

const Category = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = React.useState();
  
    const navigate = useNavigate();
  
    React.useEffect(() => {
      async function fetchCategories() {
        try {
          const res = await axios.get(`http://25.49.57.113:4000/api/v1/categories/categoryId?id=${categoryId}`);
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
        <CategoryProducts name={category.name}/>
      </div>
    );
}

export default Category
