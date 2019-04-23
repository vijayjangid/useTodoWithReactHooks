import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Todos";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
