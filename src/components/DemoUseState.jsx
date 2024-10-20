import React, { useState } from "react";

// render: lần đầu

// re-render: từ lần thứ 2

export default function DemoUseState() {
  // Phạm vi viết code JS

  const orders = [100, 200, 300, 400];

  const [totalPrice, setTotalPrice] = useState(() => {
    const total = orders.reduce((prev, current) => {
      console.log("Tính toán lại");

      return prev + current;
    });

    return total;
  });

  const [count, setCount] = useState(10); // return về 1 mảng gồm 2 phần tử

  const [user, setUser] = useState({
    id: 1,
    name: "Nguyễn Văn A",
    age: 21,
  });

  console.log("User: ", user);

  const handleIncrement = () => {
    // Cập nhật lại giá trị của State
    setCount((prev) => prev + 1); // prev = 10
    setCount((prev) => prev + 2); // prev = 11
    setCount((prev) => prev + 3); // prev = 13
  };

  const handleIncrementPrice = () => {
    setTotalPrice(totalPrice + 100);
  };

  const handleUpdateInfo = () => {
    setUser({
      ...user,
      gender: "Nam",
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <h1>Total price: {totalPrice}</h1>
      <button onClick={handleIncrementPrice}>Increment Price</button>

      <h1>UserInfo: {JSON.stringify(user)}</h1>
      <button onClick={handleUpdateInfo}>Update info</button>
    </div>
  );
}
