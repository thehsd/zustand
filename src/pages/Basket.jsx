import { useSelector } from "react-redux";
import { basketState } from "../redux/basketSlice";
import BasketItem from "../components/BasketItem";
const Basket = () => {
  const { items, invoice } = useSelector(basketState);
  return (
    <>
      <p> total price: {invoice.totalPrice}</p>
      {items.map((item) => {
        return <BasketItem product={item} key={item.id} />;
      })}
    </>
  );
};

export default Basket;
