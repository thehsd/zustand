import React from "react";
import { useBasket } from "../store/basket";
import BasketItem from "../components/BasketItem";

const Basket = () => {
  const { items, invoice, actions } = useBasket((state) => state);
  return (
    <>
      <p> total price: {invoice.totalPrice}</p>
      {items.map((item) => {
        return (
          <BasketItem
            product={item}
            key={item.id}
            remove={actions.removeItem}
          />
        );
      })}
    </>
  );
};

export default Basket;
