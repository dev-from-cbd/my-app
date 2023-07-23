import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";

function App() {
  const [value, setValue] = useState("Number in input");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JS</strong>
          <div>JS is JavaScript</div>
          <strong>2. TS</strong>
          <div>TS is TypeScript</div>
        </div>

        <div class="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
