import React, { useEffect, useRef, useState } from "react";

export default function DemoUseRef() {
  const inputRef = useRef();
  const [time, setTime] = useState(0);
  let timerId = useRef();
  console.log(timerId);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);

  const handleStart = () => {
    console.log("Id1: ", timerId);

    timerId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    console.log("Id2: ", timerId);

    clearInterval(timerId.current);
  };

  return (
    <div>
      <input type="text" id="input" />
      <input ref={inputRef} type="text" id="input" />
      <input type="text" id="input" />

      <div>
        <h2>Time: {time}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}
