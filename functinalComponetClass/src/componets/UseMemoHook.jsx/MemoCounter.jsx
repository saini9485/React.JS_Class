import React from "react";
import { useState, useMemo } from "react";
export function MemoCounter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const increamentOne = () => {
    setCountOne((prevCountOne) => prevCountOne + 1);
  };

  const increamentTwo = () => {
    setCountTwo((prevCountTwo) => prevCountTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while(i<2000000) i++;
    return setCountOne % 2 === 0;
  },[countOne]);
  return (
    <>
      <h1>Memo Counter</h1>
      <div className="btn">
        <button onClick={increamentOne}> increamentOne - {countOne}</button>
        {isEven?<span>Even</span>:<span>Odd</span>}
        <button onClick={increamentTwo}> increamentTwo - {countTwo}</button>
      </div>
    </>
  );
}
