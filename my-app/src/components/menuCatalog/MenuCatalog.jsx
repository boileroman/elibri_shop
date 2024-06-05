import React from 'react'
import style from './MenuCatalog.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../redux/productSlice'
import { useEffect } from 'react'

const MenuCatalog = ({header}) => {
  const categories = useSelector((state) => state.product.products);
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const {isActive} = useSelector((state)=>state.menu)

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category/' + categoryId + 'items');
        dispatch(setProducts(res.data));
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchCategories();
  }, []);

  console.log(categories)
  return (
    <div className={style.menu}>
      <div className={isActive ? style.blur : style.no_blur}/>
      <div className={isActive ? `${style.menu__content} ${style.active}` : style.menu__content}>
        <div className={style.menu__header}>{header}</div>
        <ul>
          {categories.map(category => 
            <li className={style.list}>
              <Link className={style.link} to={`/${category.categoryId}`}>{category.name}</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default MenuCatalog
