import React from "react";
import { removeItem } from "../redux/basketSlice";
import { useDispatch } from "react-redux";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, quantity, imageSrc } = product;
  return (
    <div>
      <img src={imageSrc} alt={name} />
      <p> {name} </p>
      <p>price : {price}</p>
      <p>quantity : {quantity}</p>
      <button
        onClick={() => dispatch(removeItem(product))}
        className="p-3 rounded-lg bg-red-600 text-white m-2"
      >
        remove item
      </button>
    </div>
  );
};

export default BasketItem;
