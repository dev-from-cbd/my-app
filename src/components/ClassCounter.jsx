import React from "react";

// Define a class component called "ClassCounter"
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    // The component's initial state is defined in the constructor
    this.state = {
      count: 0, // Initialize the "count" state to 0
    };
    // Bind the event handlers to the class instance
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // Event handler for the "Increment" button
  increment() {
    // Use the "setState" method to update the "count" state by incrementing it by 1
    this.setState({ count: this.state.count + 1 });
  }

  // Event handler for the "Decrement" button
  decrement() {
    // Use the "setState" method to update the "count" state by decrementing it by 1
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // The component's UI is defined in the "render" method
    return (
      <div>
        {/* Display the current value of the "count" state */}
        <h1>{this.state.count}</h1>
        {/* Button for incrementing the "count" */}
        <button onClick={this.increment}>Increment</button>
        {/* Button for decrementing the "count" */}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
