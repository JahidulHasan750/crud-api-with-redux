import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";

const Product = () => {
  
  
  const dispatch = useDispatch();
  const {data: products , status}= useSelector(state=>state.products);
  useEffect(() => {
        dispatch(getProducts());
  }, []);
 

  const addToCart= (product)=>{
        dispatch (add(product))
  }
  const cards = products.map((product) => (
    <div className="card lg:w-80 md:w-64 bg-base-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product.image} style={{width:'100px', height:'150px'}} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.title}</h2>
   
    <p>{product.price}$</p>
    <div className="card-actions">
      <button onClick={()=>addToCart(product)} className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
  ));

  return (
    <div>
      <h1 className="font-bold text-6xl my-8">Product Dashboard</h1>
      <div className="mx-[13%] grid gap-4 xl:grid-cols-4  md:grid-cols-2  ">{cards}</div>
    </div>
  );
};

export default Product;
