import React from "react";
import { NavLink } from "react-router-dom";
import { useBasket } from "../../store/basket";

const Header = () => {
  const { items } = useBasket((state) => state);
  const totalBasket = items.length;
  return (
    <header className="flex justify-between bg-green-200 p-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/basket">basket {totalBasket}</NavLink>
    </header>
  );
};

export default Header;
