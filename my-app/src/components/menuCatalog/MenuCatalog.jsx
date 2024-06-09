import React from 'react'
import style from './MenuCatalog.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setProduct } from '../../redux/productSlice2'
import { useEffect } from 'react'
import { setIsActive } from '../../redux/menuSlice'

const MenuCatalog = ({header}) => {
  const categories = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const {isActive} = useSelector((state)=>state.menu)

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get('http://25.49.57.113:4000/api/v1/categories/all');
        console.log(res.data)        
        dispatch(setProduct(res.data));

      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchCategories();
  }, []);

  if (!categories) {
    return 'Загрузка...';
  }

  const handleCategoryClick = (category) => {
    if (!category) {
      return 'Загрузка...';
    }
    dispatch(setIsActive(!isActive));
    navigate(`/${category.categoryId}`);
    navigate(0);
  };

  return (
    <div className={style.menu}>
      <div className={isActive ? style.blur : style.no_blur}/>
      <div className={isActive ? `${style.menu__content} ${style.active}` : style.menu__content}>
        <div className={style.menu__header}>{header}</div>
        <ul>
          {categories && categories?.map(category => 
            <li key={category.categoryId}  {...category} className={style.list}>
              <Link onClick={()=>handleCategoryClick(category)} className={style.link} to={`/${category.categoryId}`}>{category.name}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default MenuCatalog
