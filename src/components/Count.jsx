import React from "react";
import { useCount } from "../store/count";

const Count = () => {
  const number = useCount((state) => state.count);
  return <div>count: {number}</div>;
};

export default Count;
