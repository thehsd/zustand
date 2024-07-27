import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";
import Product1 from "./Pages/Product1";
import Product2 from "./Pages/Product2";
import Product3 from "./Pages/Product3";
import User from "./Pages/User";
import Letters from "./Pages/Letters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path={"/products"} element={<Products />}>
            <Route path={"/products/:postId"} element={<Product1 />} />
            <Route path={"/products/product-2"} element={<Product2 />} />
            <Route path={"/products/product-3"} element={<Product3 />} />
          </Route>
          <Route path={"/user"} element={<User />} />
          <Route path={"/memo"} element={<Letters />} />
          <Route path={"/about-us"} element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
