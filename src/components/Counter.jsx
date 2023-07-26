import React, { useState } from "react";

// Define a functional component called "Counter" using ES6 arrow function
const Counter = () => {
  // Use the "useState" hook to create a state variable called "count" with initial value 0
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const increment = () => {
    // Update the "count" state by incrementing it by 1 using the "setCount" function
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const decrement = () => {
    // Update the "count" state by decrementing it by 1 using the "setCount" function
    setCount(count - 1);
  };

  // The component's UI is defined in the return statement
  return (
    <div>
      {/* Display the current value of the "count" state */}
      <h1>Count: {count}</h1>
      {/* Button for incrementing the "count" */}
      <button onClick={increment}>Increment</button>
      {/* Button for decrementing the "count" */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
