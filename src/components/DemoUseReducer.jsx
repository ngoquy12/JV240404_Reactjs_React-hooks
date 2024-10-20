import React, { useReducer, useState } from "react";

const IN_CREMENT = "increments";
const DE_CREMENT = "decrements";

// Bước 1: Tạo initialState
const initialState = 10;

// Bước 2: Tạo reducer và cập nhật State
const reducer = (state, action) => {
  console.log("State: ", state);
  console.log("Action: ", action);

  switch (action) {
    case IN_CREMENT:
      return state + 1;

    case DE_CREMENT:
      return state - 1;

    default:
      return state;
  }
};

// Bước 3: Tạo các action
// Bước 4: truyền các action lêm reducer để xử lý

export default function DemoUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  //   const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch(IN_CREMENT);
  };

  const handleDecrement = () => {
    dispatch(DE_CREMENT);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
