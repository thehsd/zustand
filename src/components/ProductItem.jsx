import React from "react";
import { useBasket } from "../store/basket";

const ProductItem = ({ data }) => {
  const { name, imageSrc, price } = data;
  const { addItem } = useBasket((state) => state.actions);
  return (
    <div className="p-4 bg-gray-200  m-3">
      <img src={imageSrc} alt={name} />
      <h3 className="text-blue-950"> {data.name}</h3>
      <div className=" flex justify-between">
        <h5 className="font-bold">price</h5>
        <span>{price}</span>
      </div>
      <button
        onClick={() => addItem(data)}
        className="p-3 rounded-lg bg-green-600 text-white m-2"
      >
        add item
      </button>
    </div>
  );
};

export default ProductItem;
