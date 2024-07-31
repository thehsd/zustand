import React from "react";
import products from "../constants/products";
import ProductItem from "../components/ProductItem";
const ProductsList = () => {
  return (
    <>
      {products.map((product, index) => {
        return <ProductItem key={index} data={product} />;
      })}
    </>
  );
};

export default ProductsList;
