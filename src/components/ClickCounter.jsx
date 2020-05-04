import React, { useState } from "react";

export function ClickCounter({ start }) {
  const [count, setCount] = useState(start || 0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <output>{count}</output>
    </div>
  );
}
