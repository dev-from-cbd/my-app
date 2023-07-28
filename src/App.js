import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

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
        <MyButton>Create a new post</MyButton>
      </form>

      <PostList posts={posts} title="The List of posts" />
      <PostList posts={posts2} title="About my dreams)" />
    </div>
  );
}

// Export the App component to make it available for other parts of the application
export default App;
