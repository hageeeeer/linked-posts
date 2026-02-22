import React, { useMemo, useState } from "react";

function expensiveFunction(num) {
  console.log("Expensive function is running...");

  for (let i = 0; i < 100; i++) {
    num += i;
  }
  return num;
}

export default function Test() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["a", "b", "c"]);

  const memoizedValue = useMemo(() => expensiveFunction(count), [count]);

  return (
    <div>
      <h1>Count: {memoizedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <button onClick={() => setList([...list, "d"])}>Add Item</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
