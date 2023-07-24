import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState("Number in input");

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JS", body: "JS is JavaScript" }} />
      <PostItem post={{ id: 2, title: "TS", body: "TS is TypeScript" }} />
    </div>
  );
}

export default App;
