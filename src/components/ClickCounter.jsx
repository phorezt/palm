import React, { useState } from "react";

export function ClickCounter({ start }) {
  const [count, setCount] = useState(start || 0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <output
        style={{
          display: "inline-block",
          textAlign: "center",
          marginLeft: ".5rem",
          borderRadius: 20,
          background: "rebeccapurple",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: ".8rem",
          padding: "0 .4rem",
        }}
      >
        {count}
      </output>
    </div>
  );
}
