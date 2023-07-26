import React, { useState } from "react";

// Define a functional component called "ClassCounter" using ES6 arrow function
const ClassCounter = () => {
  // Use the "useState" hook to create a state variable called "count" with initial value 0
  const [count, setCount] = useState(0);

  // Event handler for the "Increment" button
  const increment = () => {
    // Update the "count" state by incrementing it by 1 using the "setCount" function
    setCount(count + 1);
  };

  // Event handler for the "Decrement" button
  const decrement = () => {
    // Update the "count" state by decrementing it by 1 using the "setCount" function
    setCount(count - 1);
  };

  // The component's UI is defined in the return statement
  return (
    <div>
      {/* Display the current value of the "count" state */}
      <h1>{count}</h1>
      {/* Button for incrementing the "count" */}
      <button onClick={increment}>Increment</button>
      {/* Button for decrementing the "count" */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ClassCounter;
