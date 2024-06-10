import React, { useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import style from './CategoryProducts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCheapSortedItems, setExpensiveSortedItems, setItems } from '../../redux/itemSlice';
import ProductCard from '../../components/productCard/ProductCard';
import down from '../../components/assets/toTheDown.svg'

const CategoryProducts = ({name}) => {
  const { items } = useSelector((state) => state.items);
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    radiobutton: 'Любое',
  });
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Без сортировки');
  const [sortValue, setSortValue] = useState('None')
  const radioItems = ['Любое', 'До 3 дней', 'До 5 дней', 'До недели'];
  const [maxDeliveryDays, setMaxDeliveryDays] = useState(999);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await axios.get(`http://25.49.57.113:4000/api/v1/product?maxDeliveryDays=${maxDeliveryDays}&sortOrder=${sortValue}&categoryId=${categoryId}&pageNumber=${currentPage}&pageSize=7`);
        dispatch(setItems(res.data));
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchCategories();
  }, [maxDeliveryDays, currentPage, sortValue]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleChangeRadio = (e) => {
    const value = e.target.value;
    setFormValue({ ...formValue, radiobutton: value });
    
    switch (value) {
      case 'До 3 дней':
        setMaxDeliveryDays(3);
        break;
      case 'До 5 дней':
        setMaxDeliveryDays(5);
        break;
      case 'До недели':
        setMaxDeliveryDays(7);
        break;
      default:
        setMaxDeliveryDays(999);
    }
  };

   const handlePagination = (e) => {
    setCurrentPage(e); 
  }

  const handleAccordionClick = () => {
    setAccordionOpen(!accordionOpen);
  };

  const handleSortChange = (sortType) => {
    switch (sortType) {
      case 'Без сортировки':
        setSortValue('');
        break;
      case 'Сначала дешёвые':
        setSortValue('cheapest');
        break;
      case 'Сначала дорогие':
        setSortValue('mostExpensive');
        break;
      default:
        setSortValue('None');
    }
    setSelectedSort(sortType);
    setAccordionOpen(false);
  };

  if (!items || items.length === 0) {
    return <div></div>;
  }

  const pages = []

  for (let i = 0; i< items.totalPages; i++){
    pages.push(i+1)
  }

  return (
    <div className={style.all}>
      <p className={style.name}>{name}: {items.totalItems}</p>
      <div className={style.delivery_products}>
        <form onSubmit={handleSubmit} className={style.delivery_time}>
          <label className={style.delivery_name_items}>
              <p className={style.delivery_time__name}>Время доставки</p>
              {radioItems.map((el) => (
                <label className={style.radio_form}>
                  <input                   
                    type="radio"
                    onChange={handleChangeRadio}
                    checked={formValue.radiobutton === el}
                    value={el}
                  />                
                  <span className={style.radio_items}>{` ${el}`}</span>
                </label>
              ))}
            </label>
        </form>
        <div className={style.accordion}>
          <div onClick={handleAccordionClick} className={style.accordion_title}>
            {selectedSort} <img src={down} alt=''/>
          </div>
          {accordionOpen && (
            <div className={style.accordion_content}>
              <div className={style.accordion_content__text} onClick={() => handleSortChange('Без сортировки')}>Без сортировки</div>
              <div className={style.accordion_content__text} onClick={() => handleSortChange('Сначала дешёвые')}>Сначала дешёвые</div>
              <div className={style.accordion_content__text} onClick={() => handleSortChange('Сначала дорогие')}>Сначала дорогие</div>
            </div>
          )}
        </div>
        <div className={style.products_pagination}>
          <div className={style.items}>
            {items.items.map((item)=>(
                <ProductCard key={item.productId} {...item} />
            ))}
          </div>
          {items.totalItems > 7 && (
          <div className={style.pagination}>
            <button className={style.pagination__prev} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Назад</button>
            {pages.map((page) => (
              <button className={style.pagination__number} key={page} disabled={page === currentPage} onClick={() => handlePagination(page)}>{page}</button>
            ))}
            <button className={style.pagination__next} disabled={currentPage === items.totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Дальше</button>
          </div>
          )}           
        </div>     
      </div>

    </div>
  );
}

export default CategoryProducts
