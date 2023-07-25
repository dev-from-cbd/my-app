// Import the React module and the useState hook from the "react" library
import React, { useState } from "react";

// Import the Counter component from the "./components/Counter" file
//import Counter from "./components/Counter";

// Import the ClassCounter component from the "./components/ClassCounter" file
//import ClassCounter from "./components/ClassCounter";

// Import the CSS file "./styles/App.css" to apply styles to the App component
import "./styles/App.css";

// Import the PostItem component from the "./components/PostItem" file
//import PostItem from "./components/PostItem";

import PostList from "./components/PostList";

// Define the App component as a functional component
function App() {
  // Use the useState hook to create a "posts" state variable and a "setPosts" function to update the state
  // Initialize the "posts" state with an array of two post objects
  //const [posts, setPosts] = useState([
  const [posts] = useState([
    { id: 1, title: "JS", body: "JS is JavaScript" },
    { id: 2, title: "TS", body: "TS is TypeScript" },
  ]);
  const [posts2] = useState([
    { id: 1, title: "Python", body: "I want to study Python" },
  ]);

  // Return the JSX (React elements) to be rendered in the DOM
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name of post" />
        <input type="text" placeholder="Description of post" />
        <button>Create a new post</button>
      </form>

      <PostList posts={posts} title="The List of posts" />
      <PostList posts={posts2} title="About my dreams)" />
    </div>
  );
}

// Export the App component to make it available for other parts of the application
export default App;
