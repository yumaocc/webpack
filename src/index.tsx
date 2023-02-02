import React from "react";
import ReactDOM from "react-dom";
import Home from "./App.tsx";
import "./index.less";

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <h1> Webpack V5 + React </h1>13
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
