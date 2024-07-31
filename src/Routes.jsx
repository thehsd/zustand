import React from "react";
import Home from "./pages/Home";
import { useRoutes } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import NotFound from "./components/NotFound";
import Basket from "./pages/Basket";

const Routes = () => {
  let routeList = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <ProductsList />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <>{routeList}</>;
};

export default Routes;
