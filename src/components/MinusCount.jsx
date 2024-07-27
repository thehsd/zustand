import React from "react";
import { useCount } from "../store/count";

const MinusCount = () => {
  const { decrease } = useCount((state) => state.actions);

  return (
    <div>
      <button onClick={decrease}>minus minus</button>
    </div>
  );
};

export default MinusCount;
