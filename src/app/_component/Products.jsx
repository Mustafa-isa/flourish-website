"use client";

import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import apiClient from "../_Utilis/apiClient";
function Products() {
  const [products, setProducts] = React.useState([]);
  const getAllProducts = async () => {
    try {
      apiClient
        .get("/products?populate=*")
        .then((res) => {
          setProducts(res.data.data); 
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className=" relative   bg-blur-[30px]  ">

      <div className="absolute w-[200px] bottom-0  right-0 h-[200px]  blur-[100px] rounded-full bg-opacity-90 bg-pink-600 z-1"></div>

      <div className="w-full sm:w-[90%] mx-auto py-40 gap-10 flex items-center justify-center flex-wrap ">
  
  { 
  products?.map((product) => (
    <ProductItem key={product.id} product={product} />
  ))
  }
      </div>
    </div>
  );
}

export default Products;
