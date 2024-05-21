import React, { useEffect, useState } from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import '../../App.css';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/productSlice";

const Product = () =>{
//    const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.product.products);

    console.log(products)

    const dispatch = useDispatch()

    const fetchItems = () =>{
        axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/category').then(res=>{
        dispatch(setProducts(res.data))
        }); 
    };

    useEffect(()=>{
        fetchItems()
    }, []);

    return(
        <div>
            <div className="items">
            {products.map((product)=>(
                <CategoryCard key={product.itemId} {...product} />
            ))}
            </div>
        </div>
    );
};

export default Product