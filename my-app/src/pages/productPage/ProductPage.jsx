import React from 'react'
import style from './ProductPage.module.css'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Description from '../../components/description/Description'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDescriptionActive } from '../../redux/descriptionSlice'
import left from '../../components/assets/toTheLeft.svg'
import right from '../../components/assets/toTheRight.svg'
import { addItem } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'
import { CART_ROUTE } from '../../utils/const'
import { setProducts } from '../../redux/productSlice'
import { setRelated } from '../../redux/relatedSlice'
import RelatedProductCard from '../../components/relatedProductCard/RelatedProductCard'

const ProductPage = () => {
  const { productId, categoryId } = useParams();
  const [item, setItem] = useState();
  const { related } = useSelector((state)=>state.related)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { descriptionActive } = useSelector((state) => state.description)
  const dispatch = useDispatch()
  const [isAdded, setIsAdded] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await axios.get(`http://25.49.57.113:4000/api/v1/product/productId?id=${productId}`);
        setItem(res.data);
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }
    fetchItems();
  }, []);

  useEffect(()=>{
    async function fetchProducts(){
      const res = await axios.get(`http://25.49.57.113:4000/api/v1/product/withRelated?productId=${productId}`)
      dispatch(setRelated(res.data));
      console.log(res.data)
    }
    fetchProducts();
  }, []);


  const images = item ? [item.image, item.image1, item.image2, item.image3, item.image4] : [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) < 0 ? images.length - 1 : (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const image = item?.image;
  const name = item?.name;
  const price = item?.price;
  const stockQuantity = item?.stockQuantity;
  const deliveryDays = item?.deliveryDays;
  const onClickAdd = () => {
    dispatch(addItem({ image, name, price, productId, categoryId, stockQuantity, deliveryDays }));
    setIsAdded(true)
  };

  const getDeliveryDaysText = (days) => {
    if (days === 1) {
      return 'день';
    } else if (days >= 2 && days <= 4) {
      return 'дня';
    } else if (days >= 5) {
      return 'дней';
    }
    return 'дней';
  };

  if (!item) {
    return 'Загрузка...';
  }

  if (!related || related.length === 0) {
    return <div></div>;
  }


  return (
    <div>
      <div className={style.description}>
        <Description header={'Характеристики и описание'} description={item?.description}/>        
      </div>
      <div className={style.productP}>
        <div className={style.image__block}>
          <div className={style.all__images}>          
            <img className={style.images} src = {item?.image} alt='' />
            <img className={style.images} src = {item?.image1} alt='' />
            <img className={style.images} src = {item?.image2} alt='' />
            <img className={style.images} src = {item?.image3} alt='' />
            <img className={style.images} src = {item?.image4} alt='' />
          </div>
          <div className={style.main__image__block}>
            <div className={style.navigation} onClick={handlePrevImage}><img src={left} alt=''/></div>
            <div className={style.image__div}>
              <img src={images[currentImageIndex]} className={style.image} alt=''/>   
            </div>
            <div className={style.navigation} onClick={handleNextImage}><img src={right} alt=''/></div>
          </div>    
        </div>
        <div className={style.name_description}>
          <p className={style.product_name}>{item?.name}</p>
          <div className={style.characteristic}>
            <div className={style.characteristic_general}>
              <p>Тип:</p>
              <p>Цвет:</p>
              <p>Гарантия:</p>
            </div>
            <div className={style.characteristic_value}>
              <p>{item?.type}</p>
              <p>{item?.color}</p>
              <p>{item?.warranty}</p>            
            </div>            
          </div>
          <button className={style.button} onClick={() => {dispatch(setIsDescriptionActive(!descriptionActive))}}>Описание {">"}</button>     
        </div>      
        <div className={style.decoration}>
          <p className={style.product_price}>{item?.price} ₽</p>  
          <div className={style.cart_delivery_quantity}>
            <p className={style.quantity}>Осталось {item?.stockQuantity} шт.</p>            
            {isAdded ? (
            <Link to={CART_ROUTE}>
              <button className={`${style.button_cart} ${style.navigate}`}>Перейти в корзину</button>
            </Link>
            ) : (
              <button className={style.button_cart} onClick={onClickAdd}>Добавить в корзину</button>
            )} 
            <p className={style.delivery_days}>Доставка через {item?.deliveryDays} {getDeliveryDaysText(item?.deliveryDays)}</p>               
          </div>   
        </div>                   
      </div>
      <div className={style.related}>
        <p className={style.related__header}>Из той же категории</p>
        <div className={style.related_products}>
          {
            related?.relatedProducts.map((related) => (
              <RelatedProductCard key={related.productId} {...related} />
            ))
          }          
        </div>
      </div>     
    </div>
  )
}

export default ProductPage
