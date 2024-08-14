import React from "react";

const Product = ({ productData }) => {
  return <div className="bg-gray-300 my-5">{productData.title}</div>;
};

export default Product;
