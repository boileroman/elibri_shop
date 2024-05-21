import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
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
        axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/items').then(res=>{
        dispatch(setProducts(res.data))
        }); 
    };

    useEffect(()=>{
        fetchItems()
    }, []);

    // const AddProduct = () =>{
    //     axios.post('https://662a6f4f67df268010a3ec12.mockapi.io/items',   {
    //         id: 3,
    //         name: "Dubrovsky",
    //         price: 240,
    //         link: "https://th.bing.com/th/id/OIP.3oMC3cORhIzqBdBpBPI-7wHaL0?rs=1&pid=ImgDetMain"
    //       }, 
    //       {'content-type': 'application/json'},
    //     ).then((res)=>{
    //         console.log(res.data);
    //         fetchItems();
    //     })
    // }

    return(
        <div>
            <div className="items">
            {products.map((product)=>(
                <ProductCard key={product.id} {...product} />
            ))}
            </div>
        </div>
    );
};

export default Product