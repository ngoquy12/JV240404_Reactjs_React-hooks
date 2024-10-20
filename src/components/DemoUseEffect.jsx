import React, { useEffect, useState } from "react";

// modules
// import React gọi là export default

export default function DemoUseEffect() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  console.log("Input value: ", inputValue);

  //   Trường hợp thứ nhất => Ít dùng
  //   useEffect(() => {
  //     console.log("Callback được gọi");

  //     document.title = inputValue;
  //   });

  //   Trường hợp thứ 2 => Hay dùng để gọi API lấy dữ liệu
  //   useEffect(() => {
  //     console.log("Callback được gọi");
  //   }, []);

  useEffect(() => {
    console.log("Callback được gọi");

    document.title = `Count: ${count}`;
  }, [count, inputValue]);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
