import React from "react";
import { NavLink } from "react-router-dom";
import { useBasket } from "../../store/basket";
import { useSelector } from "react-redux";
import { basketState } from "../../redux/basketSlice";

const Header = () => {
  const { items } = useSelector(basketState);
  const totalBasket = items.length;
  return (
    <header className="flex justify-between bg-green-200 p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/basket">basket {totalBasket}</NavLink>
    </header>
  );
};

export default Header;
