import React from "react";

const BasketItem = ({ product, remove }) => {
  const { name, price, quantity, imageSrc } = product;
  return (
    <div>
      <img src={imageSrc} alt={name} />
      <p> {name} </p>
      <p>price : {price}</p>
      <p>quantity : {quantity}</p>
      <button
        onClick={() => remove(product)}
        className="p-3 rounded-lg bg-red-600 text-white m-2"
      >
        remove item
      </button>
    </div>
  );
};

export default BasketItem;
