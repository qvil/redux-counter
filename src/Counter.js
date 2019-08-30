import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

const Counter = () => {
  const { value } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <h2>value: {value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
