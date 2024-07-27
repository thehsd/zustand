import React from "react";
import { useCount } from "../store/count";

const AddCount = () => {
  const { increase } = useCount((state) => state.actions);
  return (
    <div>
      <button onClick={increase}> plus plus</button>
    </div>
  );
};

export default AddCount;
