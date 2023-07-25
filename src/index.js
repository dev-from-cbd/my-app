// Import the React module from the "react" library
import React from "react";

// Import the ReactDOM module from the "react-dom" library
import ReactDOM from "react-dom";

// Import the App component from the "./App" file
import App from "./App";

// Use the ReactDOM.render() method to render the App component inside the element with the ID "root" in the DOM
// The render() method takes two arguments:
// 1. The component to be rendered (in this case, App)
// 2. The DOM element where the component will be displayed (in this case, the element with the ID "root")
ReactDOM.render(<App />, document.getElementById("root"));
