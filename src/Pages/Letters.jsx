import React, { useMemo, useState } from "react";
const handleLetter = (text) => {
  if (text.length < 2) {
    return [...text];
  }
  const param = [];
  const letters = [...text];
  letters.forEach((lett, index) => {
    const withOut = [...letters];
    withOut.splice(index, 1);
    handleLetter(withOut).forEach((p) => {
      param.push(lett + p);
    });
  });
  return param;
};
const Letters = () => {
  const [param, setParam] = useState("");
  const [showLetters, setShowLetters] = useState(false);
  console.time("calc");
  const cacheParams = useMemo(() => handleLetter(param), [param]);
  console.timeEnd("calc");

  return (
    <div>
      <input
        onChange={(e) => setParam(e.target.value)}
        className="bg-yellow-100 border border-solid border-black m-2"
        type={"text"}
        placeholder={"get letter"}
        name={"letter"}
      />
      <br />
      <button onClick={() => setShowLetters(!showLetters)}>
        {showLetters ? "hidden" : "show"} letter
      </button>
      <ul>
        {showLetters &&
          cacheParams.map((letter, index) => {
            return (
              <li key={index}>
                {index + 1} - {letter}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Letters;
