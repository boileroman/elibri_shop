import React, { useEffect } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import '../../App.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/productSlice";
import style from './Product.module.css'
import { Link } from "react-router-dom";
import banner from '../assets/banner1.svg'
import Footer from "../footer/Footer";

const Product = () =>{
    const products = useSelector((state) => state.products.products);


    const dispatch = useDispatch()

    const fetchItems = () =>{
        axios.get('http://25.49.57.113:4000/api/v1/categories/all').then(res=>{
        dispatch(setProducts(res.data))
        }); 
    };

    useEffect(()=>{
        fetchItems()
    }, []);
    if (!products || products === 0){
        return <div></div>
    }
    return(
        <div className={style.shop}>
            <Link to={`/${4}`}><img className={style.banner} src={banner} alt=''/></Link>
            <div className={style.grid}>
                {products.map((product)=>(
                    <CategoryCard key={product.productId} {...product} />
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Product