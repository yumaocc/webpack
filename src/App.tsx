import React, { useState } from "react";
import "./App.less";
export default function App() {
  const [a, setA] = useState("a");
  return (
    <>
      <div className="title">{a}</div>
      <button className="button" onClick={() => setA("b")}>
        点击
      </button>
      {[1, 2, 3].map((item) => (
        <div key={item}> {item}</div>
      ))}
    </>
  );
}
